# 백준 2751
# import sys
# n = int(input())
# a = []
# for _ in range(n):
#   a.append(int(sys.stdin.readline()))
# a.sort()
# for i in a:
#   print(i)

# import sys
# n = int(sys.stdin.readline())
# a = list(map(int,sys.stdin.readline().split()))
# m = int(sys.stdin.readline())
# b = list(map(int,sys.stdin.readline().split()))
# ans = [0 for _ in range(m)]
# for i in a:
#   for j in range(m):
#     if i == b[j]:
#       ans[j] = 1
#       break
# print(ans)


# 백준 27433
# n = int(input())
# def factorial(num):
#   if num > 0:
#     return num * factorial(num-1)
#   else:
#     return 1
# print(factorial(n))