import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app'

chai.use(chaiHttp);
const { expect } = chai;


describe('Teste na rota', () => {
    describe('/customer', () => {
        it('POST- Deve ser possível cadastrar um cliente no banco de dados', async () => {
            const httpResponse = await chai
                .request(app)
                .post('/customer/')
                .send({
                    name: "João",
                    cpf: "222.222.222.88",
                    table: "4"
                })
            expect(httpResponse.status).to.be.equal(201);
            expect(httpResponse.body).to.be.deep.equal({ message: 'Customer succesfully registered' });
        })
    })

    describe('/dishes', () => {
        it('POST - Deve ser possível cadastrar um prato no banco de dados', async () => {
            const httpResponse = await chai
                .request(app)
                .post('/dishes/')
                .send({
                    title: "Poke",
                    category: "Pratos Frios",
                    price: 25.00,
                    photo: "https://www.casalcozinha.com.br/wp-content/uploads/2020/09/shimeji-na-manteiga-2-1300x825.jpg",
                    finishIn: 15
                })
            expect(httpResponse.status).to.be.equal(201);
            expect(httpResponse.body).to.be.deep.equal({ message: 'Dish created' });
        })

        it('DELETE - Deve ser possível inativar um prato', async () => {
            const httpResponse = await chai
                .request(app)
                .delete('/dishes/1')
            expect(httpResponse.status).to.be.equal(200);
            expect(httpResponse.body).to.be.deep.equal({ message: 'Inactivated' });
        })

        it('PUT - Deve ser possível atualizar um ítem de um prato específico', async () => {
            const httpResponse = await chai
                .request(app)
                .put('/dishes/1')
                .send({
                    "key": "photo",
                    "value": "50"
                })
            expect(httpResponse.status).to.be.equal(200);
        })
    })

    describe('/order', () => {
        it('POST - Deve ser possível cadastrar um pedido no banco de dados', async () => {
            const httpResponse = await chai
                .request(app)
                .post('/order/')
                .send({
                    "customer_id": 2,
                    "dishes": [
                        {
                            "dish_id": 2,
                            "quantity": 1
                        },
                        {
                            "dish_id": 3,
                            "quantity": 3
                        }
                    ]
                })
            expect(httpResponse.status).to.be.equal(201);
            expect(httpResponse.body).to.haveOwnProperty('id');
        })

        it('PUT - Deve ser possível atualizar o status do pedido', async () => {
            const httpResponse = await chai
                .request(app)
                .put('/order/1/update?q=Finalizado')
            expect(httpResponse.status).to.be.equal(200);
            expect(httpResponse.body).to.be.deep.equal({ message: 'Order status updated' });
        })
    })
})