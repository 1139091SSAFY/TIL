# 시간 복잡도 문제 (Time Complexity)

## [BAEKJOON #10815](https://www.acmicpc.net/problem/10815) - 24. 02. 02.

* 문제
    숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 가지고 있는지 아닌지를 구하는 프로그램을 작성하시오.

* 입력
    첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 숫자 카드에 적혀있는 수는 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다. 두 숫자 카드에 같은 수가 적혀있는 경우는 없다.

    셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다. 넷째 줄에는 상근이가 가지고 있는 숫자 카드인지 아닌지를 구해야 할 M개의 정수가 주어지며, 이 수는 공백으로 구분되어져 있다. 이 수도 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다

* 출력
    첫째 줄에 입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 가지고 있으면 1을, 아니면 0을 공백으로 구분해 출력한다.

### Sorting / Searching Method 간 Time Complexity 비교

  * Notation
      | Notation | Meaning |
      | :---: | :---: |
      | $$n$$ | length of iterable |
      | $$k$$ | maximum value(integer) |
      | |

  * Sorting
      | Sorting Method | Time Complexity |
      | :---: | :---: |
      | Bubble_Sort | $$O(n^2)$$ |
      | Counting_Sort | $$O(n+k)$$ |
      | Selection_Sort | $$O(n^2)$$ |
      | |

  * Searching
      | Searching Method | Time Complexity |
      | :---: | :---: |
      | Sequential_Search | $$O(n)$$ |
      | Binary_Search | $$log(n)$$ |
      | Selection_Algorithm | $$O(kn)$$ |
      | |

### 완성 코드
```python
import sys

# BinarySearch - Time Complexity log(n)
def binarySearch(arr, n, k):
    # arr : input array
    # n : len(arr)
    # k : searching value

    start = 0
    end = n - 1

    while start <= end:
        middle = (start + end) // 2

        if k == arr[middle]:
            return 1
        elif k > arr[middle]:
            start = middle + 1
        else:
            end = middle - 1
    return 0

N = int(input())
hold = list(map(int, sys.stdin.readline().split()))

M = int(input())
check = list(map(int, sys.stdin.readline().split()))

hold.sort()
for elem in check:
    print(binarySearch(hold, N, elem), end = ' ')
```

### 메모

* 미리 정렬이 필요한 탐색 방법은 이진 탐색(Binary Search)과 셀렉션 알고리즘(Selection Algorithm)

* 이진 탐색을 위해 정렬이 선행되어야 했고, 정렬 방법 중 시간 탐색도가 작은 방법을 활용해야 할 것

    * 시간 복잡도가 낮은 카운팅 정렬을 활용했으나 메모리 이슈 발생해 내장함수 .sort() 사용

    * 추가적인 정렬 / 탐색 방법 학습을 통해 개선 가능성이 높음
  

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$', '$']]},
    messageStyle: "none",
    "HTML-CSS": { availableFonts: "TeX", preferredFont: "TeX" },
  });
</script>