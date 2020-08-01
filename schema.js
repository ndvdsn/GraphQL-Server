const axios = require('axios');

const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// CustomerType
const CustomerType = new GraphQLObjectType({
    name:'Customer',
    fields:() => ({
        id: {type:GraphQLString},
        AA_energy: {type:GraphQLFloat},
        A_flowtemp: {type:GraphQLFloat},
        B_power: {type:GraphQLFloat},
        B_energy: {type:GraphQLFloat},
        quhz25: {type:GraphQLFloat},
        quhz37: {type:GraphQLFloat},
        quhz31: {type:GraphQLFloat},
        quhz27: {type:GraphQLFloat},
        quhz36: {type:GraphQLFloat},
        quhz23: {type:GraphQLFloat},
        B_rtntemp: {type:GraphQLFloat},
        quhz7: {type:GraphQLFloat},
        SOC_TS: {type:GraphQLFloat},
        quhz0: {type:GraphQLFloat},
        quhz13: {type:GraphQLFloat},
        QUHZstatus: {type:GraphQLString},
        CHZ1call: {type:GraphQLString},
        quhz26: {type:GraphQLFloat},
        A_power: {type:GraphQLFloat},
        B_flowtemp: {type:GraphQLFloat},
        quhz24: {type:GraphQLFloat},
        B_flowrate: {type:GraphQLFloat},
        quhz28: {type:GraphQLFloat},
        A_flowrate: {type:GraphQLFloat},
        temp5: {type:GraphQLFloat},
        quhz16: {type:GraphQLFloat},
        quhz15: {type:GraphQLFloat},
        QUHZopmode: {type:GraphQLString},
        degree_minutes: {type:GraphQLFloat},
        DHWmode: {type:GraphQLString},
        quhz34: {type:GraphQLFloat},
        quhz39: {type:GraphQLFloat},
        quhz32: {type:GraphQLString},
        quhz35: {type:GraphQLFloat},
        SOC_DHW: {type:GraphQLFloat},
        quhz30: {type:GraphQLString},
        CHZ2call: {type:GraphQLString},
        TSmode: {type:GraphQLString},
        quhz22: {type:GraphQLFloat},
        quhz14: {type:GraphQLFloat},
        quhz29: {type:GraphQLFloat},
        quhz18: {type:GraphQLFloat},
        A_rtntemp: {type:GraphQLFloat},
        quhz38: {type:GraphQLFloat},
    })
})


// Root Query

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        customer:{
            type:CustomerType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/customers/'+ args.id)
                .then(res => res.data);
            }
        },
        customers:{
            type: new GraphQLList(CustomerType),
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/customers')
                .then(res => res.data);
            }
        }
    }
    
});

// Mutations
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        // addCustomer:{
        //     type:CustomerType,
        //     args:{
        //         quhz32: {type: new GraphQLNonNull(GraphQLString)},
        //         quhz35: {type:new GraphQLNonNull(GraphQLFloat)},
        //         SOC_DHW: {type:new GraphQLNonNull(GraphQLFloat)},
        //         quhz30: {type: new GraphQLNonNull(GraphQLString)},
        //         CHZ2call: {type: new GraphQLNonNull(GraphQLString)},
        //         TSmode: {type: new GraphQLNonNull(GraphQLString)},
        //     },
        //     resolve(parentValue, args){
        //         return axios.post('http://localhost:3000/customers', {
        //             quhz32: args.quhz32,
        //             quhz35: args.quhz35,
        //             SOC_DHW: args.SOC_DHW,
        //             quhz30: args.quhz30,
        //             CHZ2call: args.CHZ2call,
        //             TSmode: args.TSmode
        //         })
        //         .then(res => res.data);
        //     }
        // },

        // deleteCustomer:{
        //     type:CustomerType,
        //     args:{
        //         id:{type: new GraphQLNonNull(GraphQLString)}
        //     },
        //     resolve(parentValue, args){
        //         return axios.delete('http://localhost:3000/customers/'+args.id)
        //         .then(res => res.data);
        //     }
        // },

        editCustomer:{
            type:CustomerType,
            args:{
                id: {type:GraphQLString},
                AA_energy: {type:GraphQLFloat},
                A_flowtemp: {type:GraphQLFloat},
                B_power: {type:GraphQLFloat},
                B_energy: {type:GraphQLFloat},
                quhz25: {type:GraphQLFloat},
                quhz37: {type:GraphQLFloat},
                quhz31: {type:GraphQLFloat},
                quhz27: {type:GraphQLFloat},
                quhz36: {type:GraphQLFloat},
                quhz23: {type:GraphQLFloat},
                B_rtntemp: {type:GraphQLFloat},
                quhz7: {type:GraphQLFloat},
                SOC_TS: {type:GraphQLFloat},
                quhz0: {type:GraphQLFloat},
                quhz13: {type:GraphQLFloat},
                QUHZstatus: {type:GraphQLString},
                CHZ1call: {type:GraphQLString},
                quhz26: {type:GraphQLFloat},
                A_power: {type:GraphQLFloat},
                B_flowtemp: {type:GraphQLFloat},
                quhz24: {type:GraphQLFloat},
                B_flowrate: {type:GraphQLFloat},
                quhz28: {type:GraphQLFloat},
                A_flowrate: {type:GraphQLFloat},
                temp5: {type:GraphQLFloat},
                quhz16: {type:GraphQLFloat},
                quhz15: {type:GraphQLFloat},
                QUHZopmode: {type:GraphQLString},
                degree_minutes: {type:GraphQLFloat},
                DHWmode: {type:GraphQLString},
                quhz34: {type:GraphQLFloat},
                quhz39: {type:GraphQLFloat},
                quhz32: {type:GraphQLString},
                quhz35: {type:GraphQLFloat},
                SOC_DHW: {type:GraphQLFloat},
                quhz30: {type:GraphQLString},
                CHZ2call: {type:GraphQLString},
                TSmode: {type:GraphQLString},
                quhz22: {type:GraphQLFloat},
                quhz14: {type:GraphQLFloat},
                quhz29: {type:GraphQLFloat},
                quhz18: {type:GraphQLFloat},
                A_rtntemp: {type:GraphQLFloat},
                quhz38: {type:GraphQLFloat},
            },
            resolve(parentValue, args){
                return axios.patch('http://localhost:3000/customers/'+args.id, args)
                .then(res => res.data);
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});