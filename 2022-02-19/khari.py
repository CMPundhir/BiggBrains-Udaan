print("hi! how are you?")
a = 70
b = 9
c = a + b
d = a * b
e = a / b
f = a - b
g = a % b
print(c)
print(d)
print(e)
print(f)
print(g)

if e > 1:
	print("Sameer is Good Boy")
else:
	print("Sameer is ugli")



class Human():
	def __init__(self, name):
		self.name = name

	def mySelf(self):
		print("My Name is "+self.name)


sameer = Human("Sameer")
		
sameer.mySelf()
# operator precedence example
ans = 9 + 8 * (9 - 7) / 5 % 15
	'''= 9 + 8 * 2 / 5 % 15
	= 9 + 16 / 5 % 15
	= 9 + 3.2 % 15
	= 9 + 3.2
	= 12.2'''
print(ans)