def convert(input):
    output = ""
    index = 0
    locIndex = 0
    output += "["
    for y in input:
        output += "["
        for x in y:
            for z in x:
                if (z == "s"):
                    output += "s"
                elif (z == "g"):
                    output += "g"
                elif (z == "\\"):
                     output += ""
                elif (z == "n"):
                     output += 0
                else:
                    output += ""
                locIndex += 1
                if (locIndex < len(input[index])):
                    output += ","
        locIndex = 0
        output += "]"
        index += 1
        if (index < len(input)):
                    output += ",\n"
    output += "]"
    return output

convertableText = open("C:/Users/Anwender/Documents/Von alt/html/jsrpg/board.txt", "r")
convertable = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
index = 1

for i in range(0, 13):
    convertable[index - 1] += convertableText.readlines(index)[0]
    index += 1

final = open("C:/Users/Anwender/Documents/Von alt/html/jsrpg/final.txt", "w")

final.write(convert(convertable))
