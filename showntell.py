books =[ 
   {"author":"trevor","title": "under the sea", "publishYear": 2020},
    {"author":"noah","title": "born a crime","publishYear": 2019}
]

def check_books_by_author(author):
    author_books = [book['author'] for book in books]
    if author in author_books:
        found_idx = author_books.index(author)
        
        print(f"{books[found_idx]['title']} by {books[found_idx]['author']} was published in {books[found_idx]['publishYear']}")
        
    else:
        print("The book by that author not found")   
        
check_books_by_author("noah")


new_books=[{"author_name":"Yvonne","title":"born a crime","pub_yr":2020},
{"author_name":"ajema","title":"born to suffer","pub_yr":1987}]
def check_book(author_name):
    for book in new_books :
     if book["author_name"] == author_name:
        return  (f"The book by {author_name} is {book['title']} was published in the year {book['pub_yr']}")
     else:
        return("No books by that author")
print(check_book("Yvonne"))


class DisasterRecoverySystem:
    def __init__(self):
        self.situations = {}
    def add_situation(self, location, situation):
        if location not in self.situations:
            self.situations[location] = []
        self.situations[location].append(situation)
    def get_situation(self, location):
        return self.situations.get(location, [])

disaster = DisasterRecoverySystem()
disaster.add_situation("nairobi", "Flood")
disaster.add_situation("kisumu", "Earthquake")
print(disaster.get_situation("nairobi"))  
print(disaster.get_situation("kisumu"))  
 