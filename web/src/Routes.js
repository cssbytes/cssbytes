import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Route path="/stylesheets/new" page={NewStylesheetPage} name="newStylesheet" />
        <Route path="/stylesheets/{id}/edit" page={EditStylesheetPage} name="editStylesheet" />
        <Route path="/bytes/new" page={NewBytePage} name="newByte" />
        <Route path="/bytes/{id}/edit" page={EditBytePage} name="editByte" />
        <Route path="/u/{username}/edit" page={EditUserPage} name="editUser" />
      </Private>
      <Route path="/tags/new" page={NewTagPage} name="newTag" />
      <Route path="/tags/{id}/edit" page={EditTagPage} name="editTag" />
      <Route path="/tags/{id}" page={TagPage} name="tag" />
      <Route path="/tags" page={TagsPage} name="tags" />
      <Route path="/stylesheets" page={StylesheetsPage} name="stylesheets" />
      <Route path="/bytes" page={BytesPage} name="bytes" />
      <Route path="/stylesheets/{id}" page={StylesheetPage} name="stylesheet" />
      <Route path="/stylesheets" page={UserStylesheetsPage} name="userStylesheets" />
      <Route path="/bytes/{id}" page={BytePage} name="byte" />
      <Route path="/bytes" page={UserBytesPage} name="userBytes" />
      <Route path="/u/{username}" page={UserPage} name="user" />
      <Route path="/u" page={UsersPage} name="users" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
