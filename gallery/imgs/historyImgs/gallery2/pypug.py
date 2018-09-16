import os

f = open("pug_output.txt", "r+");

for root, dirs, files in os.walk('./'):
    #Create a file "pug_output.txt" that will generate the pug text you need
    #f = open("pug_output.txt", "r+");
    #f.write(str(files) + "/n");
    #f.close();
    #print("root: " + root);
    #print("files: " + str(files));
    for jpgs in files:
    #    print(root + "/" + str(jpgs) + "\n");
        file_name = root + "/" + str(jpgs);
        f.write("a(href=' "+ file_name +")\n");
        f.write("    img(src='"+ file_name +"')\n");
    #f.close();

f.close();
