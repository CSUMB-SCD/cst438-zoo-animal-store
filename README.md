# cst438-zoo-animal-store

This is our Zoo Shop!
Created By: Victoria, AJ and Peter

Checklist of what we need to do:

## Home Page

Required: 
- [ ] Logout from any page brings user home
- [ ] GetUserData returns username, id, and credit/balance 
- [x] Background promotes our product

Extra Credit: <br>
  - [ ] Be Fancy 

## Sign-in Page

Required: <br>
  - [ ] Must have username/password 
      * Use username to obtain user data <br>
      * Password can just be a textbox <br>
      * Error shows if username/id not found <br>
        
Extra Credit: <br>
  - [ ] Secure, best practice username/password 
    
## Products Page

Required: <br>
  - [ ] List of inventory, with details shown when clicked 
      * Product Name 
      * Price 
      * Number of items in stock
      * Buy option <br>
    
  - [ ] Must have at least 8 products 
      * Products can be out of stock <br>
      
Extra Credit: <br>
  - [ ] Include low-res thumbnail images for each product item 

## Details Page

Required: <br>
 - [ ] Brought here after selecting item on “Products” page. <br>
    
 - [ ] The item details include:
     * Product Name 
     * Product Description 
     * Price 
     * Number of items in stock 
     * A hi-res image of product item 
     * “Buy” option 
     * Number of items to “Buy” 

Extra Credit:
  - [ ] Use an array of hi-res, dynamically clickable images 
    
## Checkout Page

Required: 
  - [ ] List of items in cart 
  - [ ] Can edit number of items in cart 
  - [ ] Has a "Confirm Purchase" 
      * User has sufficient credit 
      * Sufficient amount of items in stock
      * Decrements user's credit 
      * Decrements product stock 
      * Sends user to confirmation page after all checks 
        
Extra Credit: 
  - [ ] Add textboxes for "billing info" 
      * User required to fill out all fields 
        
## Thank You (Confirmation) Page

Required: 
  - [ ] Only arrive here if user purchase is successful 
    
Extra Credit: 
  - [ ] Include "undo purchase" 
      * Restores user credit 
      * Restores stock 
