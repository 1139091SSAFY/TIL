# Django - Form

<div style="text-align: right"> 24. 03. 27. </div>

## 1. Django Form

### 1. Django Form & Form Class

* HTML에서의 Form 의 역할

    * 지금까지 사용자로부터 데이터를 받기 위해 활용한 방법

    * 비정상적 / 악의적 요청을 필터링할 수 없음 → 유효한 데이터인지에 대한 확인 필요

* *유효성 검사* : 수집한 데이터가 정확하고 유효한지 확인하는 과정

    * 유효성 검사 구현을 위해 입력 값, 형식, 중복, 범위, 보안 등 많은 것을 고려해야 함

    * 이런 과정과 기능을 직접 개발하는 것이 아닌 Django가 제공하는 Form을 사용

* Django Form

    * 사용자 입력 데이터를 수집하고 (→ HTML form의 기능과 같음), 처리 및 *유효성 검사*를 수행하기 위한 도구

    * 개발 시 유효성 검사를 단순화하고 자동화할 수 있는 기능 제공

    ```python
    # articles/forms.py
    # 기본적으로 forms.py는 app 내에서 직접 만들어야 함
    # models.py 내에 입력해도 되지만, 관행적으로 forms.py는 별도로 작성함

    from django import forms

    # forms module의 Form class를 상속받음
    class ArticleForm(forms.Form):
        title = forms.CharField(max_length = 10)
        content = forms.CharField()
        
        # models.py에서 content는 models module의 TextField()를 사용했음
        # max_length가 CharField()의 필수 인자가 아닌 것 같음
    ```

    * Form class를 적용한 new view함수 변화 → label 등 직접 입력하던 것을 form을 활용하여 입력하겠다.


    ```python
    # articles/views.py
    from .forms import ArticleForm
    
    def new(request):
        form = ArticleForm()
        context = {
            'form': form,
        }
        return render(request, 'articles/new.html', context)
    ```

    * Inline 속성이 기본이라 우측으로 요소들이 배치됨 → as_p, as_div, as_table, as_ul 4가지 rendering option 활용

        * as_p : label, input 쌍을 '<'p'>'로 묶음

    ```html
    <!-- articles/new.html -->

    <h1>NEW</h1>
    <form action="{% url 'articles:create' %}" method="POST">
        {% csrf token %}
        {{ form.as_p }}
        <input type="submit">
    </form>
    ```

    * 유효성 검사는 POST method가 사용되는 create 부분에서 실행되어야 함

        * new 함수에서 유효성 검사를 실행하지 않기 때문에, 10글자를 초과해서 입력해도 저장됨

### 2. Widgets

* Widgets : HTML 'input' element의 '표현'을 담당

    * 단순히 input 요소의 속성 및 출력되는 부분을 변경하는 것

    * 제약 조건 등 기능적 요소를 컨트롤하는 기능이 아님

    ```python
    # articles/forms.py

    from django import forms

    class ArticleForm(forms.Form):
        title = forms.CharField(max_length = 10)
        content = forms.CharField(widget = forms.Textarea)
    ```

## 2. Django ModelForm

| - | Explanation |
| :---: | :--- |
| Form | 사용자 입력 데이터를 DB에 저장하지 않을 때<br>ex. 로그인 |
| ModelForm | 사용자 입력 데이터를 DB에 저장해야 할 때<br>ex. 게시글 작성, 회원가입 |
| |

### 1. ModelForm

* ModelForm : Model과 연결된 Form을 자동으로 생성해주는 기능을 제공

    * Form + Model

* ModelForm Class 정의 → 미리 작성했던 models.py 내 Article class를 두 번 쓰고 싶지 않다.

* Meta class : ModelForm의 정보를 작성하는 곳

    * exclude 속성 → 모델에서 포함하지 않은 필드를 지정할 수도 있음

        * fields / exclude 를 상황에 따라 취사 활용

```python
# articles/forms.py
# 기존 ArticleForm class 수정

from django import forms
from .models import Article

class ArticleForm(forms.ModelForm):
    class Meta:
        # model = 어떤 모델과 연동?
        # fields = 그 모델에서 어떤 필드를 사용? → tuple 혹은 list로 입력
        # 전체 field를 입력하는 기능 : magic method '__all__'
        model = Article
        # fields = ('title', 'content')
        fields = '__all__'

        # fields = ('title', )
        # or
        # exclude = ('title', )
```

    * 참고 : metadata

        * metadata : 데이터에 대한 데이터를 의미

        * 사진 (데이터)

            * 사진이 찍힌 위치, 시간, 조리개값 등 → metadata!!

* ModelForm을 적용한 create logic

```python
# articles/views.py

from .forms import ArticleForm

def create(request):
    form = ArticleForm(request.POST)    # 사용자가 입력하는 데이터를 인자로 받음

    # "유효성 검사" → forms module을 사용하는 목적
    if form.is_valid():                 
        article = form.save()           
        # 유효성 검사를 통과하면 저장(→ 새로운 게시글 생성) 후, 새로 생성된 객체를 article 변수에 받아 return
        return redirect('articles:detail', article.pk)

    # 유효성 검사를 통과하지 못한다면 (→ title 길이가 10을 초과한다면)
    # 새로운 return이 필요
    context = {
        'form': form,
    }
    # 유효성 검사를 통과하지 못한 form data를 포함시켜, 게시글을 작성하는 위치로 렌더링
    # 에러 메시지가 포함된 페이지를 렌더링
    return render(request, 'articles/new.html', context)
```

* is_valid()

    * 여러 유효성 검사를 실행하고, 데이터가 유효한지 여부를 Boolean으로 반환

* save()

    * 데이터베이스 객체를 만들고 저장

    * 키워드 인자 instance 여부를 통해 생성할지, 수정할지 결정

    ```python
    # CREATE
    form = ArticleForm(request.POST)
    form.save()

    # UPDATE
    form = ArticleForm(request.POST, instance = article)
    form.save()
    ```

### 2. Django Form 정리

* 사용자로부터 데이터를 수집 / 처리하기 위한 강력하고 유연한 도구

* HTML form의 생성, 데이터 유효성 검사 및 처리를 쉽게 할 수 있는 도구

## 3. Handling HTTP requests

### 1. view 함수 구조 변화

* new & create view 함수 간 공통점과 차이점

| Point | Explanation |
| :---: | :--- |
| 공통점 | 데이터 생성을 구현하기 위함 |
| 차이점 | new는 GET method 요청만 처리<br>create는 POST method 요청만 처리 |
| |

* HTTP request method 차이점을 활용해, 동일한 목적을 가지는 2개의 view 함수를 하나로 구조화(결합)

```python
def new(request):
    form = ArticleForm()
    context = {
        'form': form,
    }
    return render(request, 'articles/new.html', context)

def create(request):
    form = ArticleForm(request.POST)
    if form.is_valid():
        article = form.save()
        return redirect('articles:detail', article.pk)
    context = {
        'form': form,
    }
    return render(request, 'articlces/new.html', context)
```

```python
# articles/views.py
# new & create 함수 결합

def create(request):
    if request.method == "POST":
        form = ArticleForm(request.POST)
        if form.is_valid():
            article = form.save()
            return redirect('articles:detail', article.pk)
    else:
        form = ArticleForm()

    # form은 아래 2가지 중 하나로 context에 넘겨짐
    # 1. is_valid()를 통과하지 못해 Error message를 담은 form instance
    # 2. else 문의 form instance
    context = {
        'form': form,
    }
    return render(request, 'articles/new.html', context)

# new 관련 코드가 더 이상 사용되지 않을 것이므로, 기존 new 관련 코드를 모두 수정해야 함
# views.py 내 수정, url 수정, template 수정 등
```

```python
# articles/views.py
# edit & update 함수 결합

def update(request, pk):
    article = Article.objects.get(pk = pk)
    if request.method == "POST":
        form = ArticleForm(request.POST, instance = article)

        if form.is_valid():
            form.save()
            return redirect('articles:detail', article.pk)
        
    else:
        form = ArticleForm(instance = article)

    context = {
        'article': article,
        'form': form,
    }
    return render(request, 'articles/update.html', context)

# edit 관련 코드가 더 이상 사용되지 않을 것이므로, 기존 edit 관련 코드를 모두 수정해야 함
# views.py 내 수정, url 수정, template 수정 등
```

## 4. 참고

* ModelForm 키워드 인자 data와 instance 살펴보기

    * ModelForm의 부모 클래스인 BaseModelForm의 생성자 함수 예시

    ```python
    class BaseModelForm(BaseForm):
        def __init__(self, data=None, files=None, auto_id='id_%s', prefix=None,
                        initial=None, error_class=ErrorList, label_suffix=None,
                        empty_permitted=False, instance=None, use_required_attribute=None,
                        renderer=None):
    ```

    * request → data가 맨 앞이기 때문에 바로 입력 가능

    * instance → 위치가 뒤쪽에 있기 때문에 'instance = ' 라는 키워드 인자 입력을 통해 지정해 줘야 함

* Widget 응용

    ```python
    # articles/forms.py

    class ArticleForm(forms.ModelForm):
        title = forms.CharField(
            label = '제목',
            widget = forms.TextInput(
                # attributes 속성을 dictionary로 입력 가능
                attrs = {
                    'class': 'my-title',
                    'placeholder': 'Enter the title',
                    'maxlength': 10,
                }
            ),
        )

        content = forms.CharField(
            label = '내용',
            widget = forms.Textarea {
                attrs = {
                    'class': 'my-content',
                    'placeholder': 'Enter the content',
                    'rows': 5,
                    'cols': 50,
                }
            },
            error_messages = {'required': '내용을 입력해주세요.'},
        )

        class Meta:
            model = Article
            fields = '__all__'
    ```

* 필드를 수동으로 렌더링하기

```html
{{ form.non_field_errors }}
<form action="..." method="POST>
    {{% csrf_token %}}
    <div>
        {{ form.title.errors }}
        <label for="{{ form.title.id_for_label }}">Title:</label>
        {{ form.title }}
    </div>
    <div>
        {{ form.content.errors }}
        <label for="{{ form.content.id_for_label }}">Content:</label>
        {{ form.content }}
    </div>
    <input type="submit">
</form>
```

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$', '$']]},
    messageStyle: "none",
    "HTML-CSS": { availableFonts: "TeX", preferredFont: "TeX" },
  });
</script>