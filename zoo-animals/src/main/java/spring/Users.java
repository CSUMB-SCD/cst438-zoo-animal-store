package main.java.spring;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

public class Users {

    private String id;
    private String username;
    private String password;
    private double credit;

    public Users(String id, String username, String password, double credit) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.credit = credit;
    }


public String getId() {return id;}
public void setId(String id) {this.id = id; }
public String getUsername() {return username;}
public void setUsername(String username) {this.username = username;}
public String getPassword() {return password;}
public void setPassword(String password) {this.password = password;}
public double getCredit() {return credit; }
public void setCredit(double credit) {this.credit = credit;}
}