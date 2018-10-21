package spring;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

public class Items {

    private String id;
    private int itemNumber;
    private String name;
    private double price;
    private String description;
    private int instock;
    private String image;

    public Items(String id, int itemNumber, String name, double price, String description, int instock, String image) {
        this.id = id;
        this.itemNumber = itemNumber;
        this.name = name;
        this.price = price;
        this.description = description;
        this.instock = instock;
        this.image = image;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getItemNumber() { return itemNumber; }
    public void setItemNumber(int itemNumber) { this.itemNumber = itemNumber; }

    public int getInstock() { return instock; }
    public void setInstock(int instock) { this.instock = instock; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }


}