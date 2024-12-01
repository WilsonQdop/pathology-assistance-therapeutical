import { Component } from '@angular/core';
import { AuthService } from '../../../../auth-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResumoDiaComponent } from '../home-workspace-tabs/resumo-dia/resumo-dia.component';
import { ListaVacinasComponent } from '../home-workspace-tabs/lista-vacinas/lista-vacinas.component';
import { MedicamentosUsoComponent } from '../home-workspace-tabs/medicamentos-uso/medicamentos-uso.component';
import { HistoricoCirurgiasComponent } from '../home-workspace-tabs/historico-cirurgias/historico-cirurgias.component';
import { DiagnosticoPrevioComponent } from '../home-workspace-tabs/diagnostico-previo/diagnostico-previo.component';
import { HistoricoInternacaoComponent } from '../home-workspace-tabs/historico-internacao/historico-internacao.component';
import { ExamesRealizadosComponent } from '../home-workspace-tabs/exames-realizados/exames-realizados.component';
import { ExamesPeriodicosComponent } from '../home-workspace-tabs/exames-periodicos/exames-periodicos.component';
import { AnaliseHipocratesComponent } from '../home-workspace-tabs/analise-hipocrates/analise-hipocrates.component';

@Component({
  selector: 'app-home-workspace',
  standalone: true,
  imports: [CommonModule, FormsModule, ResumoDiaComponent, ListaVacinasComponent, MedicamentosUsoComponent, HistoricoCirurgiasComponent,DiagnosticoPrevioComponent, HistoricoInternacaoComponent, ExamesRealizadosComponent,ExamesPeriodicosComponent, AnaliseHipocratesComponent],
  templateUrl: './home-workspace.component.html',
  styleUrl: './home-workspace.component.css'
})
export class HomeWorkspaceComponent {
  proxPaciente: string = 'João Silva';
  dataProxPaciente:string = '17/12/2024';
  horaProxPaciente: string = '13:00';
  email: string = 'JoaoSilva@gmail.com';
  usuario: string = '';
  ultimaConsulta = []
  
  ultimasConsultas = [
    { data: '10/01/2024', hora: '15:00', paciente: 'João Silva' },
    { data: '15/02/2024', hora: '16:00', paciente: 'João Silva'},
    { data: '20/03/2024', hora: '11:00', paciente: 'João Silva' },
    { data: '30/04/2024', hora: '16:00', paciente: 'João Silva' },
  ];

  showPacienteWorkspace: boolean = false;
  showCards: boolean = true;
  showInfo: boolean = true;
  showMedicamentos: boolean = false;
  showCirurgias: boolean = false;
  showVacinas: boolean = false;
  showDiagnostico: boolean = false;
  showHistorico: boolean = false;
  showExames: boolean = false;
  showExamesLab: boolean = false;
  chatOn: boolean = false;

  abaSelecionada = 'Comorbidades';
  abas = [
    // 'Comorbidades',
    //'Alergias conhecidas',
    'Informações detalhadas',
    'Medicamentos em uso contínuo',
    // 'Histórico familiar de doenças',
    'Histórico de cirurgias',
    'Vacinas',
    'Diagnósticos prévios',
    //'IMC',
    'Histórico de internações',
    'Exames realizados',
    // 'médicos consultados',
    'Exames laboratoriais periódicos',
    //'Convênio médico',
    //'Número do cartão SUS',
    //'Autorização para compartilhamento de dados',
    // 'Hábitos de vida',
    // 'Dados ambientais',
  ];


  constructor(private authService: AuthService) {}
  ngOnInit() {

    this.authService.getUsernameObservable().subscribe((username: string | null) => {
      this.usuario = username || '';
    });



  }

  toggleChat() {
    this.authService.toggleChatStatus();
  }

  showPaciente() {
    this.showPacienteWorkspace = !this.showPacienteWorkspace;
    this.showCards = false;
  }
  returnCard() {
    this.showCards = !this.showCards;
    this.showPacienteWorkspace = false;
}



  selecionarAba(aba: string) {
    this.abaSelecionada = aba;
    
    if (aba === 'Medicamentos em uso contínuo') {
      this.toggleMedicamentos();
    }if(this.abaSelecionada === 'Informações detalhadas'){
      this.toggleInfo();
    }if(this.abaSelecionada === 'Histórico de cirurgias'){
      this.toggleCirurgias();
    }if(this.abaSelecionada === 'Vacinas'){
      this.toggleVacinas();
    }if(this.abaSelecionada === 'Diagnósticos prévios'){
      this.toggleDiagnostico();
    }if(this.abaSelecionada === 'Histórico de internações'){
      this.toggleHistorico();
    }if(this.abaSelecionada === 'Exames realizados'){
      this.toggleExames();
    }if(this.abaSelecionada === 'Exames laboratoriais periódicos'){
      this.toggleExamesLab();
    }

  }


  toggleMedicamentos(){
    this.showMedicamentos = true;
    this.showInfo = false;
    this.showCirurgias = false;
    this.showVacinas = false;
    this.showDiagnostico = false;
    this.showHistorico = false;
    this.showExames = false;
    this.showExamesLab = false;
  }

  toggleInfo(){
    this.showInfo = true;
    this.showCirurgias = false;
    this.showMedicamentos = false;
    this.showVacinas = false;
    this.showDiagnostico = false;
    this.showHistorico = false;
    this.showExames = false;
    this.showExamesLab = false;

  }

  toggleCirurgias(){
    this.showCirurgias = true;
    this.showInfo = false;
    this.showMedicamentos = false;
    this.showVacinas = false;
    this.showDiagnostico = false;
    this.showHistorico = false;
    this.showExames = false;
    this.showExamesLab = false; 
  }

  toggleVacinas(){
    this.showVacinas = true;
    this.showInfo = false;
    this.showMedicamentos = false;
    this.showCirurgias = false;
    this.showDiagnostico = false;
    this.showHistorico = false;
    this.showExames = false;
    this.showExamesLab = false;
  }

  toggleDiagnostico(){
    this.showDiagnostico = true;
    this.showInfo = false;
    this.showMedicamentos = false;
    this.showCirurgias = false;
    this.showVacinas = false;
    this.showHistorico = false;
    this.showExames = false;
    this.showExamesLab = false;
  }

  toggleHistorico(){
    this.showHistorico = true;
    this.showInfo = false;
    this.showMedicamentos = false;
    this.showCirurgias = false;
    this.showVacinas = false;
    this.showDiagnostico = false;
    this.showExames = false;
    this.showExamesLab = false;
  }



  toggleExames(){
    this.showExames = true;
    this.showInfo = false;
    this.showMedicamentos = false;
    this.showCirurgias = false;
    this.showVacinas = false;
    this.showDiagnostico = false;
    this.showHistorico = false
    this.showExamesLab = false;
  }

  toggleExamesLab(){
    this.showExamesLab = true;
    this.showInfo = false;
    this.showMedicamentos = false;
    this.showCirurgias = false;
    this.showVacinas = false;
    this.showDiagnostico = false;
    this.showHistorico = false
    this.showExames = false;
  }


}