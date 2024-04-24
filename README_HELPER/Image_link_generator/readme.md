
# README
This Ruby script can read the names of image files from a directory or a file, and modify them to be used as image links in your GitHub README.

## Usage
To use this script, you need to make a few modifications to the code. Open the script.rb file and modify the following variables:

`USERNAME` : Set this to your GitHub username.<br>
`REPO_NAME`: Set this to the name of the repository where you want to use the image links.<br>
`FILE_PATH`: If you want to read image file names from a directory, set this to the path of the directory. If you want to read image file names from a file, set this to the path of the file.

Comment out either the read_from_directory or read_from_file method call depending on which option you want to use.

Then, run the script by typing the following command in your terminal:
ruby script.rb

## Usage
```ruby
ruby main.rb
```

The script will read the image file names and modify them to be used as image links in your GitHub README. The modified image links will be printed to the forGithubImage.txt .

# Example

Suppose you have a directory named `images` that contains the following image files:

`image1.png`<br>
`image2.jpg`<br>
`image3.gif`<br>

To use these images in your GitHub README, you need to modify the file names to be image links. You can use this script to do that.

Assuming your GitHub username is `johnsmith` and the name of the repository where  the images are in your repo is `my-repo/shots`, you can modify the main.rb file as follows:


```ruby

def main()

  #!GENERAL SETTINGS
  $userName = "johnsmith"
  $height = "300"  #! HEIGHT OF THE IMAGE
  $directory = "/my-repo/master/shots/"  #! THE DIRECTORY OF THE IMAGES IN REMOTE REPOSITORY

  #! USE THESE THREE LINE BELOW TO READ FROM  LOCAL DIRECTORY
  folder_path = "Images" #! THE DIRECTORY OF THE IMAGES IN LOCAL REPOSITORY
  imageList = read_image_file_names_from_folder(folder_path)

  #! USE THE LINE BELOW TO READ FROM FILE
  #$READ_FILE_NAME ="imageNames.txt"
  #imageList = read_image_file_names_from_file()

  print_images(imageList)

  puts "Done! Check forGithubImage.txt"
end
```

Then, run the script by typing `ruby script.rb` in your terminal. The script will print the modified image links to the console:

```ruby
<img src="https://raw.githubusercontent.com/piru72/LIFE_AT_AUST/master/2.%20Game%20Shots/image1.png"  height="300">
<img src="https://raw.githubusercontent.com/piru72/LIFE_AT_AUST/master/2.%20Game%20Shots/image2.jpg"  height="300">
<img src="https://raw.githubusercontent.com/piru72/LIFE_AT_AUST/master/2.%20Game%20Shots/image3.gif"  height="300">
```

You can copy and paste these image links into your GitHub README. When someone clicks on the image, they will be taken to the repository's main page.