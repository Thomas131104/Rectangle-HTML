 export class Rectangle
{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
    }

    isExist()
    {
        return !(this.width <= 0 || Number.isFinite(this.width) || this.height <= 0 || Number.isFinite(this.height));
    }

    perimeter()
    {
        return this.isExist() ? 2*(this.width + this.height) : 0;
    }

    area()
    {
        return this.isExist() ? Math.round(this.width * this.height) : 0;
    }
}