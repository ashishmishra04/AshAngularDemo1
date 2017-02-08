/**
 * Created by amishra on 2/6/2017.
 */
import {Component} from "@angular/core";
import {GridDataResult, PageChangeEvent} from "@progress/kendo-angular-grid";

@Component({
  selector: "contact-list",
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})


export class ContactListComponent {
  public selectedContact = null;

  public contacts = [
    {firstName: "Ashish", lastName: "Mishra", phone: "4036710301", email: "ashish@gmail.com"},
    {firstName: "Ashish1", lastName: "Mishra1", phone: "40367432420301", email: "ashish1@gmail.com"},
    {firstName: "Ashish2", lastName: "Mishra2", phone: "403-671-0301", email: "ashish2@gmail.com"},
    {firstName: "Ashish3", lastName: "Mishra3", phone: "4034544301", email: "ashish3@gmail.com"},
    {firstName: "Ashish4", lastName: "Mishra4", phone: "40534535301", email: "ashish4@gmail.com"}
  ]

  onSelect(contact) {
    this.selectedContact = contact;
  }

  title = 'Hello World!';

  onButtonClick() {

    this.title = 'Hello from Kendo UI!';
  }

  private gridView: GridDataResult;
  private data: any[];
  private pageSize: number = 10;
  private skip: number = 0;
  private selectedIds: string[] = [];

  constructor() {
    this.data = this.createRandomData(100000);
    this.loadProducts();
  }

  protected pageChange(event: PageChangeEvent): void {
    console.log(event.skip);
    this.skip = event.skip;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = {
      data: this.data.slice(this.skip, this.skip + this.pageSize),
      total: this.data.length
    };
  }

  /* Generating example data */
  private createRandomData(count: number) {
    const firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne", "Nige"],
      lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth", "White"],
      cities = ["Seattle", "Tacoma", "Kirkland", "Redmond", "London", "Philadelphia", "New York", "Seattle", "London", "Boston"],
      titles = ["Accountant", "Vice President, Sales", "Sales Representative", "Technical Support", "Sales Manager", "Web Designer",
        "Software Developer", "Inside Sales Coordinator", "Chief Technical Officer", "Chief Execute Officer"];

    return Array(count).fill({}).map((_, idx) => ({
        id: idx + 1,
        firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
        lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        title: titles[Math.floor(Math.random() * titles.length)]
      })
    );
  }

  onRowSelect(dataItem, isSelected) {
    if (isSelected) {
      this.selectedIds.push(dataItem.id);
    } else {
      var index = this.selectedIds.indexOf(dataItem.id, 0);
      if (index > -1) {
        this.selectedIds.splice(index, 1);
      }
    }

    this.title = this.selectedIds.join(",") + ' checkbox is Selected';
  }

  onRowClick(dataItem) {
    this.title = dataItem.id + " is clicked"
  }
}
