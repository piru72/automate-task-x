require 'combine_pdf'

pages = CombinePDF.load("Input/CSE_Class_Routine_Spring2022.pdf").pages;

i = 0
pages.each do |page|
   pdf = CombinePDF.new
   pdf << page
   pdf.save("#{i}.pdf")
   i+=1
   if i == 2
    break
   end
end