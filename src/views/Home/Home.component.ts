import { Component, Vue } from 'vue-property-decorator';
@Component({
    name: 'home',
})
export default class Login extends Vue {
    private name = '111'
    created(): void {
        console.log('TS!!');
    }
}