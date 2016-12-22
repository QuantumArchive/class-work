## 

* Encourage pairing
* I will provide data api
* Specs are provided!
* You can use a resource library

## Views

    * `stores`
        * Header with name of company
        * `stores.all` (default for `stores`)
            * Show list of current stores
                * data is array with:
                    * { _id, name, city, state }
                * click to go to `store` with id
            * Link to go to `stores.add`
        * `stores.add`
            * Create new from: name, address, city, state
            * Cancel Button, goes back to `stores`, 
            * Submit goes to `store` with new id
    * `store` (param `id`)
        * Header with name, address, city, state
        * Data is:
            * Store object 
                * with { _id, name, address, city, state, pets }
                * where pets is array of pets
                    * pets have { _id, name, animal }
        * `store.pets` (default for `store`)
            * name, animal [cat, lizard, bird, dog, fish]
            * Link to change to Add New Pet
        * `store.addPet`
            * Create new from: name
                animal type [cat, lizard, bird, dog, fish],
                (+ store id which is implicit!)
            * Either Submit or Cancel goes to `store` for correct store