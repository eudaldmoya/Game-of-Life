import Cell from "../Cell/Cell.js";

class Matrix {
  rows;
  columns;
  cellList;

  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.cellList = this.generateMatrix();
  }

  generateMatrix() {
    if (this.rows < 3 || this.columns < 3) {
      throw new Error("Matrix must be at least 3x3");
    }

    if (this.rows > 50 || this.columns > 50) {
      throw new Error("Matrix must be 50x50 or less");
    }

    const cellList = [];
    for (let i = 1; i <= this.rows; i++) {
      for (let j = 1; j <= this.columns; j++) {
        const cell = new Cell(i, j, false);
        cellList.push(cell);
      }
    }

    return cellList;
  }
}

export default Matrix;