import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SemestreView from '../views/SemestreView.vue'
import DisciplinaView from '../views/DisciplinaView.vue'
import ResumoView from '../views/ResumoView.vue'
import LoginView from '@/views/LoginView.vue'
import RecuperacaoView  from '@/views/RecuperacaoView.vue'
import SenhaRecuperadaView  from '@/views/SenhaRecuperadaView.vue'
import CadastroView from '@/views/CadastroView.vue'
import TelefoneVerificadoView from '@/views/TelefoneVerificadoView.vue'
import EmailVerificadoView from '@/views/EmailVerificadoView.vue'
import VerificacaoTelefoneView from '@/views/VerificacaoTelefoneView.vue'
import VerificacaoEmailView from '@/views/VerificacaoEmailView.vue'

const routes = [
    { path: '/', component: LoginView, props: true, meta: { hideHeader: true }},
    { path: '/home', component: HomeView, props: true},
    { path: '/recuperacao', component: RecuperacaoView, props: true, meta: { hideHeader: true }},
    { path: '/senha-recuperacao', component: SenhaRecuperadaView, props: true, meta: { hideHeader: true }},
    { path: '/telefone-verificado', component: TelefoneVerificadoView, props: true, meta: { hideHeader: true }},
    { path: '/verificacao-telefone', component: VerificacaoTelefoneView, props: true, meta: { hideHeader: true }},
    { path: '/verificacao-email', component: VerificacaoEmailView, props: true, meta: { hideHeader: true }},
    { path: '/email-verificado', component: EmailVerificadoView, props: true, meta: { hideHeader: true }},
    { path: '/cadastro', component: CadastroView, props: true, meta: { hideHeader: true }},
    { path: '/semestre', component: SemestreView, props: true},
    { path: '/semestre/:id', component: DisciplinaView, props: true},
    { path: '/resumo/:nome', component: ResumoView, props: true}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router