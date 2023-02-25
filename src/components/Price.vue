<template>
    <div class="hair_price">
        <!-- <h2>Ціни на {{service_data[0].name}}</h2> -->
        <div class="price_list">
            <div class="price_list_left">
                <h3>{{service_data[0].name}}:</h3>
            </div>
            <div class="price_list_right" :class="{'hide': !service_data[0].price}">
                <p>Майстер</p>
                <p>Топ Майстер</p>
            </div>
        </div>
        <div class="price_list"
            v-for="service in service_data"
            :key="service.id"
        >
            <div class="price_list_left">
                <i class="fa-regular fa-circle-check"></i>
                <p>{{service.title}}</p>
            </div>
            <div class="price_list_right" >
                <p><strong>{{service.price}}</strong></p>
                <p v-if="service.topPrice"><strong>{{service.topPrice}}</strong></p>
            </div>
        </div>
        <!-- --------End--------- -->
        <div class="price_list" v-if="service2_data !== hairServices">
            <div class="price_list_left">
                <h3>{{service2_data[0].name}}:</h3>
            </div>
            <div class="price_list_right" :class="{'hide': !service2_data[0].price}">
            </div>
        </div>
        <div class="price_list_wrap" v-if="service2_data !== hairServices">
            <div class="price_list"
                v-for="service2 in service2_data"
                :key="service2.id"
            >
                <div class="price_list_left">
                    <i class="fa-regular fa-circle-check"></i>
                    <p>{{service2.title}}</p>
                </div>
                <div class="price_list_right" >
                    <p><strong>{{service2.price}}</strong></p>
                    <p v-if="service2.topPrice"><strong>{{service2.topPrice}}</strong></p>
                </div>
            </div>
        </div>
        <!-- --------End--------- -->
        <div class="price_list" v-if="service3_data !== hairServices">
            <div class="price_list_left">
                <h3>{{service3_data[0].name}}:</h3>
            </div>
            <div class="price_list_right" :class="{'hide': !service3_data[0].price}">
            </div>
        </div>
        <div class="price_list_wrap" v-if="service3_data !== hairServices">
            <div class="price_list"
                v-for="service3 in service3_data"
                :key="service3.id"
            >
                <div class="price_list_left">
                    <i class="fa-regular fa-circle-check"></i>
                    <p>{{service3.title}}</p>
                </div>
                <div class="price_list_right" >
                    <p><strong>{{service3.price}}</strong></p>
                    <p v-if="service3.topPrice"><strong>{{service3.topPrice}}</strong></p>
                </div>
            </div>
        </div>
        <!-- --------End--------- -->
        <div class="price_list" v-if="service4_data !== hairServices">
            <div class="price_list_left">
                <h3>{{service4_data[0].name}}:</h3>
            </div>
            <div class="price_list_right" :class="{'hide': !service4_data[0].price}">
            </div>
        </div>
        <div class="price_list_wrap" v-if="service4_data !== hairServices">
            <div class="price_list" 
                v-for="service4 in service4_data"
                :key="service4.id"
            >
                <div class="price_list_left">
                    <i class="fa-regular fa-circle-check"></i>
                    <p>{{service4.title}}</p>
                </div>
                <div class="price_list_right" >
                    <p><strong>{{service4.price}}</strong></p>
                    <p v-if="service4.topPrice"><strong>{{service4.topPrice}}</strong></p>
                </div>
            </div>
        </div>
        <!-- --------End--------- -->
        <div class="price_list" v-if="service5_data !== hairServices">
            <div class="price_list_left">
                <h3>{{service5_data[0].name}}:</h3>
            </div>
            <div class="price_list_right" :class="{'hide': !service5_data[0].price}">
            </div>
        </div>
        <div class="price_list_wrap" v-if="service5_data !== hairServices">
            <div class="price_list" 
                v-for="service5 in service5_data"
                :key="service5.id"
            >
                <div class="price_list_left">
                    <i class="fa-regular fa-circle-check"></i>
                    <p>{{service5.title}}</p>
                </div>
                <div class="price_list_right" >
                    <p><strong>{{service5.price}}</strong></p>
                    <p v-if="service5.topPrice"><strong>{{service5.topPrice}}</strong></p>
                </div>
            </div>
        </div>
        <!-- --------End--------- -->
        <div class="price_list" v-if="service6_data !== hairServices">
            <div class="price_list_left">
                <h3>{{service6_data[0].name}}:</h3>
            </div>
            <div class="price_list_right" :class="{'hide': !service6_data[0].price}">
            </div>
        </div>
        <div class="price_list_wrap" v-if="service6_data !== hairServices">
            <div class="price_list" 
                v-for="service6 in service6_data"
                :key="service6.id"
            >
                <div class="price_list_left">
                    <i class="fa-regular fa-circle-check"></i>
                    <p>{{service6.title}}</p>
                </div>
                <div class="price_list_right" >
                    <p><strong>{{service6.price}}</strong></p>
                    <p v-if="service6.topPrice"><strong>{{service6.topPrice}}</strong></p>
                </div>
            </div>
        </div>
        <!-- --------End--------- -->
        <div class="full_face" v-if="service_data == CosmetWatch">
            <h2>FULL FACE</h2>
            <p>( одночасний комплекс із декількох індивідуально підібраних процедур, необхідних для клієнта )</p>
            <span>Знижка 10% від загальної вартості виконаних процедур</span>
        </div>
    </div>
</template>
<script>
import hairServices from '@/data/hairServices'
import CosmetWatch from '@/data/CosmetWatch'
export default {
    props: {
        service_data: {
            type: Array,
            default: () => []
        },
        service2_data: {
            type: Array,
            default: () => []
        },
        service3_data: {
            type: Array,
            default: () => []
        },
        service4_data: {
            type: Array,
            default: () => []
        },
        service5_data: {
            type: Array,
            default: () => []
        },
        service6_data: {
            type: Array,
            default: () => []
        },
    },
    data(){
        return{
            hairServices,
            CosmetWatch
        }
    }

}
</script>

<style lang="scss" scoped>
.hair_price{
    max-width: 1230px;
    padding: 40px 20px;
    margin-bottom: 50px;
    h2{
        margin-bottom: 40px;
    }
}
.price_list{
    display: grid;
    grid-template-columns: 3fr 1fr;
    border-bottom: 1px solid rgb(75, 75, 75);
    padding: 15px 0;
    transition: all 0.4s;
    @media (max-width: 460px) {
        grid-template-columns: 2fr 1fr;
    }
    @media (min-width: 768px) {
        grid-template-columns: 6fr 1fr;
    }
    @media (min-width: 1230px) {
        width: 1190px;
    }
}
.price_list_left{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 20px;
    h3 {
        font-size: 18px;
        text-align: left;
        text-transform: capitalize;
    }
    p{
        font-size: 16px;
        text-align: left;
    }
    @media (max-width: 450px) {
        column-gap: 5px;
        font-size: 12px;
        p{
            font-size: 14px;
        }
    }
}
.price_list_right{
    display: flex;
    align-items: center;
    justify-content: space-around;
    column-gap: 5px;
    max-width: 150px;
    p{
        @media (max-width: 450px) {
            font-size: 12px;
        }
    }
}
.hide {
    p{
        visibility: hidden;
        text-align: right;
    }
}
.full_face {
    padding-top: 20px;
    margin: 0 auto;
    max-width: 400px;
    h2{
        font-weight: normal;
        margin-bottom: 10px;
        color: #aa957a;
    }
    p{
        font-size: 14px;
        margin-bottom: 10px;
    }
    span{
        font-size: 16px;
        color: #94826b;
    }
}
</style>