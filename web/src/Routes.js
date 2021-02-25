import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/tags/new" page={NewTagPage} name="newTag" />
      <Route path="/tags/{id}/edit" page={EditTagPage} name="editTag" />
      <Route path="/tags/{id}" page={TagPage} name="tag" />
      <Route path="/tags" page={TagsPage} name="tags" />
      <Route path="/stylesheets/new" page={NewStylesheetPage} name="newStylesheet" />
      <Route path="/stylesheets/{id}/edit" page={EditStylesheetPage} name="editStylesheet" />
      <Route path="/stylesheets/{id}" page={StylesheetPage} name="stylesheet" />
      <Route path="/stylesheets" page={StylesheetsPage} name="stylesheets" />
      <Route path="/bytes/new" page={NewBytePage} name="newByte" />
      <Route path="/bytes/{id}/edit" page={EditBytePage} name="editByte" />
      <Route path="/bytes/{id}" page={BytePage} name="byte" />
      <Route path="/bytes" page={BytesPage} name="bytes" />
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id}/edit" page={EditUserPage} name="editUser" />
      <Route path="/users/{id}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
