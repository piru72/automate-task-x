class Image
  attr_accessor :name, :link

  def initialize(name, link)
    @name = name
    @link = link
  end
end

$userName = "piru72"
$height = "300"
$directory = "/LIFE_AT_AUST/master/2.%20Game%20Shots/"

def generate_link(file)
  name = file

  link = "<img src=\"https://raw.githubusercontent.com/" + $userName + $directory + name + "\"  " + "height=\"" + $height + "\">"
  image = Image.new(name, link)
  return image
end

def generate_links(file_names)
  number_of_lines = file_names.size
  i = 0
  images = []
  while (number_of_lines > 0)
    image = generate_link(file_names[i])
    images << image
    number_of_lines -= 1
    i += 1
  end

  return images
end

def print_images(imageList)
  forGithubImages = File.new("forGithubImage.txt", "w")

  i = 0
  while (i < imageList.size)
    forGithubImages.puts imageList[i].link
    i += 1
  end
end

def read_files_in_folder(folder_path)
  Dir.entries(folder_path).select { |file| File.file?(File.join(folder_path, file)) }
end

def main()
  folder_path = "Images"
  file_names = read_files_in_folder(folder_path)

  imageList = generate_links(file_names)

  print_images(imageList)
  puts "Done! Check forGithubImage.txt"
end

main()
