from googletrans import Translator

translator = Translator()
sent = input("Enter the text : ")
outputText = translator.translate(sent, dest='gu')
print(outputText.text)
