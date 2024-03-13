def convert(input, type):
    output = ""
    index = 0
    locIndex = 0
    output += "["
    for y in input:
        output += "["
        for x in y:
            for z in x:
                if (z == "s"):
                    if (type == "snow"):
                        output += "sst"
                    else: 
                        output += "s"
                elif (z == "g"):
                    output += "sn"
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

convertableText = open("/var/www/mc-tetragon.de/jsrpg/board.txt", "r")
convertable = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
index = 1

for i in range(0, 13):
    convertable[index - 1] += convertableText.readlines(index)[0]
    index += 1

final = open("/var/www/mc-tetragon.de/jsrpg/final.txt", "w")

final.write(convert(convertable, "snow"))
