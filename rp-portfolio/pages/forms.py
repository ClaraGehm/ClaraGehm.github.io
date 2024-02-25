from wtforms import Form, StringField

class Search(Form):
    search = StringField(label="Search")