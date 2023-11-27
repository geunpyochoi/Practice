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

cards = [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4];

num = len(cards) + 1

comb = []
for i in range(0,num-1):
  for j in range(i+1,num-1):
    if i+j == num:
      comb.append([i,j]);
print(comb);