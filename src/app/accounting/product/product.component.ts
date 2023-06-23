import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'productCode', 'productName', 'productRate', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  productCode: string;
  position: number;
  productName: string;
  productRate: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, productCode: 'PRO/00001', productName: 'Pen', productRate: 15 },
  { position: 2, productCode: 'PRO/00002', productName: 'Book', productRate: 25 },
  { position: 3, productCode: 'PRO/00003', productName: 'Pendrive', productRate: 670 },
  { position: 4, productCode: 'PRO/00004', productName: 'Laptop', productRate: 45000 },
  { position: 5, productCode: 'PRO/00005', productName: 'Cabel', productRate: 30 },
  { position: 6, productCode: 'PRO/00006', productName: 'Mouse', productRate: 650 },
  { position: 7, productCode: 'PRO/00007', productName: 'Charger', productRate: 150 },
  { position: 8, productCode: 'PRO/00008', productName: 'Vivo y91', productRate: 9990 },
  { position: 9, productCode: 'PRO/00009', productName: 'Bluetooth', productRate: 1450 },
  { position: 10, productCode: 'PRO/000010', productName: 'OTG', productRate: 15 },
  { position: 11, productCode: 'PRO/000011', productName: 'Power Bank', productRate: 750 },
  { position: 12, productCode: 'PRO/000012', productName: 'Specker', productRate: 450 },
  { position: 13, productCode: 'PRO/000013', productName: 'Clock', productRate: 200 },
  { position: 14, productCode: 'PRO/000014', productName: 'Stand', productRate: 100 },
  { position: 15, productCode: 'PRO/000015', productName: 'Mouse Pad', productRate: 50 },
  { position: 16, productCode: 'PRO/000016', productName: 'Digital Board', productRate: 7500 },
  { position: 17, productCode: 'PRO/000017', productName: 'Colors Pad', productRate: 80 },
  { position: 18, productCode: 'PRO/000018', productName: 'CPU', productRate: 4500 },
  { position: 19, productCode: 'PRO/000019', productName: 'RAM-8GB', productRate: 2500 },
  { position: 20, productCode: 'PRO/000020', productName: 'Camera', productRate: 80000 }
];