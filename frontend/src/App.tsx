import React from "react";
import "./App.css";
import { Contact } from "./components/contact/contact.interface";

import { fetchContacts } from "./components/contact/contact.service";
import { ContactListComponent } from "./components/contactList.component";

type AppProps = {};
type AppState = {
  contacts: Contact[];
};

class App extends React.Component<{}, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    fetchContacts()
      .then((contacts) => {
        this.setState({
          contacts,
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.contacts.length === 0 ? (
            <p>Empty</p>
          ) : (
            <ContactListComponent contacts={this.state.contacts} />
          )}
        </header>
      </div>
    );
  }
}

export default App;
