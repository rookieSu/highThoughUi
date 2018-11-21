import React, { Component } from 'react'
import ContextMenu from 'jquery-contextmenu'
import MenuCss from '../node_modules/jquery-contextmenu/dist/jquery.contextMenu.css'
import { Button } from 'semantic-ui-react'
const mol2Items = { "edit": { name: "Edit", icon: 'edit' }, 'delete': { name: "Delete", icon: 'delete' } };
const txtItems = { "edit": { name: 'Edit', icon: 'edit' }, "copy": { name: "Copy", icon: "copy" }, "delete": { name: "Delete", icon: "delete" } };
const molItems = { "edit": { name: 'Edit', icon: 'edit' }, "copy": { name: "Copy", icon: "copy" }, "delete": { name: "Delete", icon: "delete" },"paste":{name:"paste",icon:"paste"} };
export default class RightMenu extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var items;
    for (let item of this.props.args) {
      console.log(item.formate)
      switch (item.formate) {
        case 'mol2': items = mol2Items; break;
        case 'txt': items = txtItems; break;
        case 'mol': items = molItems; break;
      }
      $.contextMenu({
        selector: "."+item.formate,
        autoHide: 'true',
        callback: function (key, options) {
          if (key == 'edit') {
            console.log("im tring")
          }
        },
        items: items
      });
    }
  }
  render() {
    return (
      <div>
        {
          this.props.args.map(item =>
            <Button className={item.formate}>
              {item.name}
            </Button>)
        }
      </div>
    )
  }
}

