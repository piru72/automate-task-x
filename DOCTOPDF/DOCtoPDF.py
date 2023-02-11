

# import modules
import os
import aspose.words as aw

# Define the directory that contains the PDF files
pdf_dir = 'DOC'

# Get a list of all PDF files in the directory
doc_files = [f for f in os.listdir(pdf_dir) if f.endswith('.docx')]



# Loop through each PDF file

for doc_file in doc_files :
    full_path = os.path.join(pdf_dir, doc_file)
    pdf_name = doc_file[:-5]
    print (pdf_name + '.pdf')

    # Load word document
    doc = aw.Document(full_path)

    # # Save as PDF
    doc.save('FINAL_PDF/' + pdf_name + '.pdf')
    
  








        