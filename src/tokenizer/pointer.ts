export class CharPointer {
  public index: number = 0;

  public jump(idx: number) {
    this.index = idx;
  }

  public next() {
    this.index++;
  }

  public prev() {
    this.index--;
  }
}
