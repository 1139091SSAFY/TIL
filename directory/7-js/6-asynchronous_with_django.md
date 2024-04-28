# JavaScript - Asynchronous with Django

<div style="text-align: right"> 24. 04. 24. </div>

## 1. Ajax와 서버

### 1. 개요

* Ajax, Asynchronous JavaScript and XML : 비동기적인 웹 애플리케이션 개발에 사용하는 기술

    * <span style="color: red">axios가 XML 객체를 생성 및 서버에 요청</span> → <span style="color: blue">Ajax 요청 처리 및 응답 데이터 생성, JSON 데이터 응답</span> → <span style="color: red">Promise 객체 데이터를 활용해 DOM 조작</span>

        * then (response) / catch (error)

        * then method의 chaining

    * 웹 페이지의 **일부분**만을 다시 로딩

## 2. Ajax with Follow

### 1. 비동기 팔로우 구현

* Ajex 적용

    1. 프로필 페이지에 axios CDN 작성

        ```HTML
        <!-- accounts/profile.html -->
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        ```

    2. form 요소 선택을 위해 id 속성 지정 및 선택

        * 요청이 axios로 대체되기 때문에 action과 method 속성은 삭제

        ```HTML
        <!-- accounts/profile.html -->

        <form id="follow-form">
            ...
        </form>
        ```

        ```JS
        const formTag = document.querySelector('#follow-form')
        ```

    3. form 요소에 이벤트 핸들러 할당

        * submit의 기본 동작 (새로고침) 취소

        ```JS
        // accounts/profile.html

        formTag.addEventListener('submit', function (event) {
            event.preventDefault()
        })
        ```

    4. axios 요청 작성

        * url에 작성할 user pk는 어떻게 작성해야 할까?

            * 'data-*' 속성 : 사용자 지정 데이터 특성을 만들어 임의의 데이터를 HTML과 DOM 사이에서 교환할 수 있는 방법

                * 모든 사용자 지정 데이터는 JavaScript에서 <span style="color: red">dataset</span> 속성을 통해 사용

                    * 주의사항

                        1. 대소문자 여부에 상관없이 'xml' 문자로 시작 불가

                        2. 세미콜론, 대문자 포함 불가

            ```HTML
            <!-- accounts/profile.html -->

            <!-- data- : 문법상 규칙, 이 이후로 붙는 것이 변수 이름(자유) -->
            <!-- 여러 변수를 넘겨줄 것이라면 여러 변수를 만들어줘야 함 -->
            <!-- user-id 변수가 userId로 자동으로 변경됨 → event.currentTarget.dataset에서 참고 -->
            <form id="follow-form" data-user-id="{{ person.pk }}">
                ...
            </form>
            ```

        * csrf token은 어떻게 보내야 할까?

            * 문서상 input hidden type으로 존재하는 csrf token data를 axios로 전송해야 함

            * csrf 값을 가진  input 요소를 직접 선택 후 axios에 작성

            ```JS
            // accounts/profile.html

            const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value

            formTag.addEventListener('submit', function (event) {
                event.preventDefault()

                const userId = event.currentTarget.dataset.userId
                const userId = this.dataset.userId
                const userId = formTag.dataset.userId

                axios({
                    method: 'post',
                    url: `/accounts/${userId}/follow/`,
                    headers: {
                        'X-CSRFToken': csrftoken,
                    },
                })
                    .then( (response) => {
                        
                    })
                    .catch( (response) => {

                    })
            })        

    5. Follow 버튼을 토글하기 위해서는 현재 follow / unfollow 상태에 대한 확인이 필요

        * Django의 view 함수에서 follow 여부를 파악할 수 있는 변수를 추가로 생성해 JSON type으로 응답하기

        ```python
        # accounts/views.py

        from django.http import JsonResponse

        @login_required
        def follow(request, user_pk):
            User = get_user_model()
            person = User.objects.get(pk = user_pk)

            if person != request.user:
                if person.followers.filter(pk = request.user.pk).exists():
                    person.followers.remove(request.user)
                    is_followed = False
                else:
                    person.followers.add(request.user)
                    is_followed = True

                context = {
                    'is_followed': is_followed,
                }
                return JsonResponse(context)
            return redirect('accounts:profile', person.username)
        ```

    6. 팔로잉 수와 팔로워 수 비동기 적용

        * 해당 요소를 선택할 수 있도록 span tag와 id 속성 작성

        ```HTML
        <!-- accounts/profile.html -->

        <div>
            팔로잉 : <span id="followings-count">{{ person.followings.all|length }}</span>
            팔로워 : <span id="followers-count">{{ person.followers.all|length }}</span>
        </div>
        ```

    7. 각 span tag 선택

        ```JS
        // accounts/profile.html

        .then( (response) => {
            ...
            const followingsCountTag = document.querySelector('#followings-count')
            const followersCountTag = document.querySelector('#followers-count')
        })
        ```

    8. Django view 함수에서 팔로워, 팔로잉 인원 수를 연산하여 결과를 응답 데이터로 전달

        ```python
        # accounts/views.py

        def follow(request, user_pk):
            ...

              context = {
                  'is_followed': is_followed,
                  'followings_count': person.followings.count(),
                  'followers_count': person.followers.count(),
              }
              ...
        ```

    9. 응답 데이터를 받아 각 태그의 인원수 값 변경에 적용

        ```JS
        // accounts/profile.html

        .then( (response) => {
            ...
            const followingsCountTag = document.querySelector('#followings-count')
            const followersCountTag = document.querySelector('#followers-count')

            followingsCountTag.textContent = response.data.followings_count
            followersCountTag.textContent = response.data.followers_count
        })
        ```


## 3. Ajax with Likes

### 1. 비동기 좋아요 구현

* 전반적인 Ajax 적용은 팔로우 구현 과정과 모두 동일

* 단, 팔로우와 달리 좋아요 버튼은 **한 페이지에 여러 개**가 존재

    * 모든 좋아요 버튼에 event listener를 할당해야 할까? → **버블링** 활용

        * 한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작하는 현상

        * 가장 최상단의 조상 요소(document)를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작

* Ajax 적용

    1. 모든 좋아요 form 요소를 포함하는 최상위 요소 작성

        ```HTML
        <!-- articles/index.html -->

        <article class="article-container">
            {% for article in articles %}
                ...
            {% endfor %}
        </article>
        ```

    2. 최상위 요소 선택, 이벤트 핸들러 할당

        * 하위 요소들의 submit event를 감지하고 submit 기본 event를 취소

        ```JS
        const articleContainer = document.querySelector('.article-container')

        articleContainer.addEventListener('submit', function (evnet) {
            event.preventDefault()
        })
        ```

    3. axios 작성

        * url에 작성해야 하는 article pk는 어떻게 작성?

            * 각 좋아요 form에 article.pk를 부여 후 HTML의 article.pk 값을 JavaScript에서 참조하기

        * csrf token 입력

            ```HTML
            <!-- articles/index.html -->

            <form data-article-id="{{ article.pk }}">
                ...
            </form>
            ```

            ```JS
            // articles/profile.html

            const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value

            formTag.addEventListener('submit', function (event) {
                event.preventDefault()

                const articleId = event.target.dataset.articleId
            })
            ```

        | | description |
        | :---: | :--- |
        | currentTarget | '현재' 요소<br>항상 이벤트 핸들러가 연결된 요소**만**을 참조하는 속성<br>'this'와 같음 |
        | target | 이벤트가 발생한 가장 안쪽의 요소(target)를 참조하는 속성<br>**실제 이벤트가 시작된 요소**<br>버블링이 진행되어도 변하지 않음 |
        | |

    4. url 완성 후 요청 및 응답 확인

        ```JS
        // articles/index.html

        articleContainer.addEventListener('submit', function (event) {
          event.preventDefault()

          const articleId = event.target.dataset.articleId
          
          // 3. axios 작성
          axios({
            method: 'post',
            url: `/articles/${articleId}/likes/`,
            headers: {
                    'X-CSRFToken': csrftoken,
                },
            })
                .then( (response) => {
                    console.log(response)
                })
                .catch( (error) => {
                    console.log(error)
                })
        })
        ```
    
    5. 좋아요 버튼을 토글하기 위해서는 현재 사용자가 좋아요를 누른 상태인지 아닌지에 대한 상태 확인이 필요

        * Django의 view 함수에서 좋아요 여부를 파악할 수 있는 변수 추가 생성, JSON type으로 응답하기

        ```python
        # articles/views.py
        from django.http import JsonResponse

        @login_required
        def likes(request, article_pk):
            article = Article.objects.get(pk=article_pk)
            if request.user in article.like_users.all():
                article.like_users.remove(request.user)
                is_liked = False
            else:
                article.like_users.add(request.user)
                is_liked = True
            context = {
                'is_liked': is_liked,
            }
            return JsonResponse(context)        
        ```

    6. 응답 데이터 is_liked를 받아 isLiked 변수에 할당

        ```JS
        // articles/index.html

        axios({
          method: 'post',
          url: `/articles/${articleId}/likes/`,
          headers: {
                  'X-CSRFToken': csrftoken,
              },
          })
              .then( (response) => {
                  console.log(response)
                  // 4. 응답 데이터 is_liked를 받아 변수에 할당
                  const isLiked = response.data.is_liked
              })
              .catch( (error) => {
                  console.log(error)
              })
        ```

    7. 문자와 article의 pk 값을 혼합하여 id 속성값을 설정

        ```HTML
        {% if request.user in article.like_users.all %}
          <input type="submit" value="좋아요 취소" id="like-{{ article.pk }}">
        {% else %}
          <input type="submit" value="좋아요" id="like-{{ article.pk }}">
        {% endif %}
        ```

    8. 각 좋아요 버튼 선택 후 isLiked에 따라 버튼을 토글

        ```JS
        .then( (response) => {
            console.log(response)
            const isLiked = response.data.is_liked
          
            // 각 좋아요 버튼 선택 후 isLiked 값에 따라 버튼 토글
            const likeBtn = document.querySelector(`#like-${article.Id}`)
            if (isLiked ===  true) {
                lineBtn.value = '좋아요 취소'
            } else {
                likeBtn.value = '좋아요'
            }
        })        
        ```

### 2. 버블링을 활용하지 않은 경우

1. querySelectorAll() 을 사용해 전체 좋아요 버튼을 선택

    ```HTML
    <!-- accounts/index.html -->

    {% for article in articles %}
        ...
        <form class="like-forms" data-article-id="{{ article.pk }}">
            {% csrf_token %}
            {% if request.user in article.like_users.all %}
                <input type="submit" value="좋아요 취소" id="like-{{ article.pk }}">
            {% else %}
                <input type="submit" value="좋아요" id="like-{{ article.pk }}">
            {% endif %}
        </form>
        <hr>
    {% endfor %}
    ```

2. forEach() 를 사용해 전체 좋아요 버튼을 순회하며 진행

    ```JS
    // articles/index.html

    const formTags = document.querySelectorAll('.like-forms')
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value

    formTags.forEach( (formTag) => {
        formTag.addEventListener('submit', function (event) {
            event.preventDefault()

            const articleId = formTag.dataset.articleId

            axios({
                method: 'post',
                url: `/articles/${articleId}/likes/`,
                headers: {
                    'X-CSRFToken': csrftoken,
                },
            })
                .then( (response) => {
                    const isLiked = response.data.is_liked
                    const likeBtn = document.querySelector(`#like-${articleId}`)
                    if (isLiked === true) {
                        likeBtn.value = '좋아요 취소'
                    } else {
                        likeBtn.value = '좋아요'
                    }
                })
        })
    })
    ```

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$', '$']]},
    messageStyle: "none",
    "HTML-CSS": { availableFonts: "TeX", preferredFont: "TeX" },
  });
</script>