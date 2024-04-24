class Image
  attr_accessor :name, :link

  def initialize(name, link)
    @name = name
    @link = link
  end
end

$userName = ""
$height = ""
$directory = ""

def generate_link(file, mode)
  mode == "fromFile" ? name = file.gets.chomp.to_s : name = file

  link = "<img src=\"https://raw.githubusercontent.com/" + $userName + $directory + name + "\"  " + "height=\"" + $height + "\">"
  image = Image.new(name, link)
  return image
end

def read_image_file_names_from_file()
  image_file = File.new($READ_FILE_NAME, "r")

  number_of_lines = File.foreach(image_file).count

  images = Array.new()

  while (number_of_lines > 0)
    image = generate_link(image_file, "fromFile")
    images << image
    number_of_lines -= 1
  end

  image_file.close

  return images
end

def generate_links(file_names)
  images = []

  file_names.size.times do |i|
    image = generate_link(file_names[i], "fromDirectory")
    images << image
  end

  return images
end

def print_images(imageList)
  forGithubImages = File.new("forGithubImage.txt", "w")

  imageList.size.times do |i|
    forGithubImages.puts imageList[i].link
  end
end

def read_files_in_folder(folder_path)
  Dir.entries(folder_path).select { |file| File.file?(File.join(folder_path, file)) }
end
def read_image_file_names_from_folder(folder_path)
  file_names = read_files_in_folder(folder_path)
  return generate_links(file_names)
end

def main()

  #!GENERAL SETTINGS
  $userName = "piru72"
  $height = "300"  #! HEIGHT OF THE IMAGE
  $directory = "/LIFE_AT_AUST/master/2.%20Game%20Shots/"  #! THE DIRECTORY OF THE IMAGES IN REMOTE REPOSITORY

  #! USE THESE THREE LINE BELOW TO READ FROM  LOCAL DIRECTORY
  folder_path = "Images" #! THE DIRECTORY OF THE IMAGES IN LOCAL REPOSITORY
  imageList = read_image_file_names_from_folder(folder_path)

  #! USE THE LINE BELOW TO READ FROM FILE
  #$READ_FILE_NAME ="imageNames.txt"
  #imageList = read_image_file_names_from_file()

  print_images(imageList)

  puts "Done! Check forGithubImage.txt"
end

main()
