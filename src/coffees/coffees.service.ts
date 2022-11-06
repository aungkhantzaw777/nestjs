import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.enity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            flavors: ['chocolate', 'vanilla']
        }
    ];

    findAll() {
        return this.coffees
    }
    findOne(id:number) {
        const coffee = this.coffees.find(item => item.id == id)
        console.log(typeof id)
        if(!coffee) {
            throw new NotFoundException(`coffee #${id} not found`);
        }
        return coffee
    }
    create(createCoffee: any) {
        this.coffees.push(createCoffee)
        return createCoffee;
    }

    update(id: number, updateCoffee : any) {
        const existingCoffee = this.findOne(id);
        if(existingCoffee) {
            // update the exisitn entity
        }
    }
    remove (id: number) {
        const coffees = this.coffees.filter(item => item.id !== id)
        return this.coffees = coffees
    }
}
