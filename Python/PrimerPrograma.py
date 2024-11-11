def imc(){
peso = float(input("Peso en KG: "))
altura = float(input("Altura en M:"))

imc = peso /(altura ** 2)
print(f"IMC: {imc: .2f}")
if imc < 18.5:
  print ("Peso bajo")
elif 18.5 <= imc < 24.9:
  print ("Peso normal")
elif 25 <= imc < 29.9:
  print ("Sobrepeso")
else:
   print("Obesidad")
}

def reverse_string(text):
    reversed_string = ""
    for char in text:
        reversed_string = char + reversed_string
    return reversed_string

print(reverse_string("Hola, mundo!"))