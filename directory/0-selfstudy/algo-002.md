# 재귀함수, DFS, Backtracking 등

* DFS : Depth-First Search, 깊이우선탐색

    * 시작 정점의 한 방향으로 갈 수 있는 경로가 있는 곳까지 탐색 → 모든 곳을 탐색했다면(더 이상 갈 곳이 없다면), 가장 마지막에 만났던 갈림길 간선이 있는 정점으로 복귀 → 이후 다른 방향의 정점으로 탐색을 계속 반복 → 결국 모든 정점을 방문하는 순회 방법

      * 가장 마지막에 만났던 갈림길의 정점부터 다시 DFS를 반복해야 하므로 → 후입선출 구조의 스택을 활용하기 좋음 (*반드시 스택을 활용하여 구현하는 것이 아님, 구현 / 활용하기에 좋은 자료구조라는 것*)

    * DFS 알고리즘

      1. 시작 정점 v를 결정해 방문

      2. 정점 v에 인접한(연결되어 있는) 정점 중에서

        * 방문하지 않은 정점 w가 있으면, 정점 v를 스택에 push하고 정점 w 방문

          * 그리고 w를 v로 하여 다시 2 반복
          
        * 방문하지 않은 정점이 없으면, 탐색의 방향을 바꾸기 위해 스택을 pop하여 받은 가장 마지막 방문 정점을 v로 하여 다시 2를 반복

      3. 스택이 공백이 될 때까지 2를 반복

* [SWEA 12398 - DFS](https://swexpertacademy.com/main/talk/solvingClub/problemView.do?solveclubId=AYzyPVaq3yYDFASg&contestProbId=AXsfTc1aAsADFAVy&probBoxId=AY2GAF9qGIEDFATh&type=USER&problemBoxTitle=0208_stack1&problemBoxCnt=3)

    ```python
    # while문 활용하여 반복 계산
    # stack을 정점 복귀에 활용
    def dfs(s):
        stack = []
        visited = [0] * (1 + V)

        stack.append(s)
        visited[s] = 1

        while True:
            for w in adjl[s]:
                if w == G:
                    return 1
                elif visited[w] == 0:
                    stack.append(w)
                    visited[w] = 1
            else:
                if stack:
                    s = stack.pop()
                else:
                    return 0

    t = int(input())

    for case in range(1, 1 + t):
        V, E = map(int, input().split())
        adjl = [[] for _ in range(1 + V)]

        for _ in range(E):
            s, e = map(int, input().split())
            adjl[s].append(e)

        S, G = map(int, input().split())
        ans = dfs(S)
        print(f'#{case} {ans}')
    ```

    ```python
    # 재귀함수 사용
    # return을 활용해 함수의 반환값을 사용하는 대신, 조건 만족 시 global 변수 ans를 활용해 결과 도출
    def dfs(s):
    
        visited[s] = 1
        for w in adjl[s]:
            if w == G:
                global ans; ans = 1
            elif visited[w] == 0:
                dfs(w)
    
    t = int(input())
    
    for case in range(1, 1 + t):
        V, E = map(int, input().split())  # V : node 수, E : 간선 수
        adjl = [[] for _ in range(V + 1)]
    
        for _ in range(E):
            s, e = map(int, input().split())
            adjl[s].append(e)
    
        S, G = map(int, input().split())
        visited = [0] * (V + 1)
    
        ans = 0
        dfs(S)
        print(f'#{case} {ans}')
    ```

    ```python
    # 재귀함수 이용
    # 조건 만족 시 dfs 함수의 반환값이 1이 됨을 이용, local 변수 ret를 지정해 함수의 결과값 반환
    def dfs(s):
        if s == G:
            return 1

        ret = 0
        for w in adjl[s]:
            ret += dfs(w)

        return ret

    t = int(input())

    for case in range(1, 1 + t):
        V, E = map(int, input().split())
        adjl = [[] for _ in range(V + 1)]

        for _ in range(E):
            s, e = map(int, input().split())
            adjl[s].append(e)

        S, G = map(int, input().split())
        visited = [0] * (V + 1)

        ans = dfs(S)
        print(f'#{case} {ans}')
    ```


* [SWEA 11620 - DFS](https://swexpertacademy.com/main/talk/solvingClub/problemView.do?solveclubId=AYzyPVaq3yYDFASg&contestProbId=AXfxiO6a2FsDFAUO&probBoxId=AY2fyJoqI6UDFATh&type=USER&problemBoxTitle=0213_stack2&problemBoxCnt=3)

    ```python
    # while문 활용
    # stack을 정점 복귀에 활용
    # push / pop하며 stack의 조건문(while stack:)에 주의할 필요가 있음
    di = [0, 1, 0, -1]
    dj = [1, 0, -1, 0]

    def dfs(pos):
        visited = [[0] * N for _ in range(N)]
        visited[pos[0]][pos[1]] = 1

        stack = [pos]
        while stack:  # stack에 원소가 남아있을 때
            for k in range(4):
                ni, nj = pos[0] + di[k], pos[1] + dj[k]
                if 0 <= ni < N and 0 <= nj < N and (field[ni][nj] == 0 or field[ni][nj] == 3) and visited[ni][nj] == 0:
                    if field[ni][nj]:
                        return 1
                    else:
                        # 기존의 position을 stack에 입력
                        # 시작점에 갈림길이 존재한다면 pos를 stack에 중복시켜 입력하지 않는다면 while 조건을 만족하지 않게 되어, 다른 갈림길을 탐색하지 않게 된다.
                        # while문 조건을 바꾸고 for~ else~의 조건을 새로이 하는 방식으로 바꿀 수도 있을 것
                        stack.append(pos)
                        pos = [ni, nj]    # 이후 pos 변수에 새로운 좌표를 입력시켜 준다
                        visited[pos[0]][pos[1]] = 1
                        break
            else:
                pos = stack.pop()
        return 0

    t = int(input())

    for case in range(1, 1 + t):
        N = int(input())
        field = [list(map(int, input())) for _ in range(N)]
        visited = [[0] * N for _ in range(N)]

        for row in range(N):
            for col in range(N):
                if field[row][col] > 1:
                    if field[row][col] == 2:
                        pos = [row, col]
                    elif field[row][col] == 3:
                        end = [row, col]
        ans = dfs(pos)
        print(f'#{case} {ans}')
    ```

    ```python
    # 재귀함수 이용
    # 조건 만족 시 dfs의 반환값이 1이 됨을 지정, local 변수 ret을 활용함
    di = [0, 1, 0, -1]
    dj = [1, 0, -1, 0]

    def dfs(pos):
        if pos == end:
            return 1

        visited[pos[0]][pos[1]] = 1

        ret = 0
        for k in range(4):
            ni, nj = pos[0] + di[k], pos[1] + dj[k]
            if ni < 0 or ni >= N or nj < 0 or nj >= N:
                continue
            if field[ni][nj] == 1 or visited[ni][nj]:
                continue
            
            # 정점 정보를 별도로 기억하지 않고 재귀로 처리함
            # 이 때문에, pos = [ni, nj] 로 초기 위치 정보를 덮어씌우면 재귀에 문제가 발생한다.
            # n_pos를 지정하지 않고 ret += dfs([ni, nj]) 와 같은 방식으로 입력해도 됨
            n_pos = [ni, nj]
            ret += dfs(n_pos)

        return ret

    t = int(input())
    for case in range(1, 1 + t):
        N = int(input())
        field = [list(map(int, input())) for _ in range(N)]
        visited = [[0] * N for _ in range(N)]

        for row in range(N):
            for col in range(N):
                if field[row][col] > 1:
                    if field[row][col] == 2:
                        pos = [row, col]
                    elif field[row][col] == 3:
                        end = [row, col]
        ans = dfs(pos)
        print(f'#{case} {ans}')
    ```

    ```python
    # 재귀함수 이용
    # 필요한 return값이 0 / 1이고, 
    # 시작 지점과 목적 지점이 연결되어 있다면 visited를 활용할 수 있을 것이다.
    # 자주 활용하면 좋을 것 같은 Pythonic Notation에도 주목하자
    dr = [0, 1, 0, -1]
    dc = [1, 0, -1, 0]

    def dfs(r, c):
        visited[r][c] = 1
        for k in range(4):
            nr, nc = r + dr[k], c + dc[k]
            if nr < 0 or nr >= N or nc < 0 or nc >= N:
                continue
            if field[nr][nc] == 1 or visited[nr][nc]:
                continue
            dfs(nr, nc)

    t = int(input())
    for case in range(1, 1 + t):
        N = int(input())
        field = [list(map(int, input())) for _ in range(N)]
        visited = [[0] * N for _ in range(N)]

        sr = sc = er = ec = 0
        for r in range(N):
            for c in range(N):
                if field[r][c] == 2:
                    sr, sc = r, c
                elif field[r][c] == 3:
                    er, ec = r, c

        ans = dfs(sr, sc)
        print(f'#{case} {visited[er][ec]}')
    ```

* 이외에 참고해볼 만한 문제

    * [SWEA #1219](https://swexpertacademy.com/main/talk/solvingClub/problemView.do?solveclubId=AYzyPVaq3yYDFASg&contestProbId=AV14geLqABQCFAYD&probBoxId=AY2GAF9qGIEDFATh&type=PROBLEM&problemBoxTitle=0208_stack1&problemBoxCnt=3)

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$', '$']]},
    messageStyle: "none",
    "HTML-CSS": { availableFonts: "TeX", preferredFont: "TeX" },
  });
</script>