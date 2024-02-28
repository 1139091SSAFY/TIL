# APS : Algorithm Problem Solving

<div style="text-align: right"> 24. 02. 27. ~ </div>

## 1. 반복과 재귀

* 반복 (Iteration) / 재귀 (Recursion)

    * 반복 : 수행하는 작업이 완료될 때까지 반복

        * 반복문은 코드를 n번 반복시킬 수 있다.

    * 재귀 : 주어진 문제의 해를 구하기 위해 동일하면서 더 작은 문제의 해를 이용

        * 하나의 큰 문제를 해결할 수 있는(해결하기 쉬운) 더 작은 문제로 쪼개고 결과들을 결합

        * 재귀호출은 n중 반복문을 생성할 수 있다.

        * base condition, branch, level

* 순열 (Permutation)

    * 서로 다른 N개에서 R개를 중복없이, 순서를 고려하여 나열

    * 순열 구현 원리

        1. 재귀호출을 할 때마다, 이동 경로를 흔적으로 남긴다.

        2. 가장 마지막 레벨에 도달했을 때, 이동 경로(흔적)을 출력한다.

    * 중복을 취급하지 않는 순열

        1. 중복순열 코드를 작성

        2. 중복을 제거하는 코드를 추가

            * 전역 리스트를 사용하면, 이미 선택했던 숫자인지 아닌지 구분할 수 있다.

            * 재귀 호출을 하기 직전, 이미 선택했던 숫자인지 아닌지 검사하는 코드가 필요하다.

                ```python
                used = [False, False, False]
                ```

                ```python
                # 중복순열
                def func1(i):
                    # 기저조건
                    if i == N:
                        print(*path)

                    else:
                        for k in range(6):
                            path.append(1 + k)
                            func1(i + 1)
                            path.pop()

                # 순열
                def func2(i):
                    # 기저조건
                    if i == N:
                        print(*path)

                    else:
                        for k in range(6):
                            if used[k]:
                                continue
                            used[k] = True
                            path.append(1 + k)
                            func2(i + 1)
                            used[k] = False
                            path.pop()

                N = 2
                path = []
                used = [False] * 6
                func1(0)
                print()
                func2(0)
                ```

### 2. 완전 탐색

* 완전탐색 (Brute-Force)

    * 모든 가능한 경우를 시도해 정답을 찾아내는 알고리즘


### 3. 부분집합

* 집합에서 부분집합을 찾아내는 구현 방법

    1. 완전 탐색

        * 재귀호출을 이용한 완전탐색

        * 실전보다는 완전탐색 학습용으로 권장

    2. Binary Counting

        * 2진수 & 비트 연산 활용

        * 원소 수에 해당하는 N개의 비트열 이용 (뒤에서부터 카운팅)

        ```python
        arr = ['A', 'B', 'C']
        n = len(arr)

        def get_sub(tar):
            for i in range(n):
                if tar & 0x1:       # tar(2진수)에서 비트 연산을 이용해, 마지막 한 자리(1비트 자리)가 1인지 확인하는 연산
                    print(arr[i], end = ' ')
                tar >>= 1           # 검사한 한 자리 제거

        for tar in range(1 << n):
            print('{', end = '')
            get_sub(tar)
            print('}')
        ```

### 4. 조합

### 5. 탐욕 알고리즘

* 결정이 필요할 때, 현재 기준으로 가장 좋아보이는 선택지를 결정해 답을 도출하는 알고리즘

* 동전 교환

    * 만약 1730원을 거슬러주기 위해 사용할 수 있는 최소 동전 수는?

    * 화장실 문제

    * 0-1 Knapsack

    * 회의실 배정

        1. 끝나는 시간 기준 오름차순 정렬

        2. 빠르게 끝나는 회의를 선택해 확정

        3. 이후로 가능한 회의 중, 빠르게 끝나는 회의를 선택해 확정