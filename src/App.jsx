import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Sistema de Mapa de Risco Hospitalar</h1>
        <p className="subtitle">Guia Completo de Navegação e Uso</p>
      </header>

      <div className="nav-section">
        <h2><span className="icon">🏠</span>Página Inicial</h2>
        <div className="nav-item">
          <div className="nav-item-icon">D</div>
          <div className="nav-item-content">
            <h3>Dashboard Principal</h3>
            <p>Visualize o resumo geral dos riscos, estatísticas em tempo real e alertas prioritários. Acesse rapidamente as áreas mais críticas do hospital.</p>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-item-icon">📊</div>
          <div className="nav-item-content">
            <h3>Indicadores Gerais</h3>
            <p>Acompanhe métricas importantes como número total de riscos identificados, distribuição por setor e evolução temporal.</p>
          </div>
        </div>
      </div>

      <div className="nav-section">
        <h2><span className="icon">🗺️</span>Mapa de Riscos</h2>
        <div className="nav-item">
          <div className="nav-item-icon">🏥</div>
          <div className="nav-item-content">
            <h3>Visualização por Setor</h3>
            <p>Navegue mediante a planta baixa interativa do hospital. Clique nos setores para ver riscos específicos de cada área.</p>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-item-icon">🔍</div>
          <div className="nav-item-content">
            <h3>Filtros Avançados</h3>
            <p>Filtre riscos por tipo, gravidade, status, responsável ou data. Use as opções de busca para encontrar informações específicas.</p>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-item-icon">📍</div>
          <div className="nav-item-content">
            <h3>Localização de Riscos</h3>
            <p>Identifique visualmente os pontos de risco no mapa. As cores indicam a gravidade: vermelho (alto), amarelo (médio), verde (baixo).</p>
          </div>
        </div>
      </div>

      <div className="nav-section">
        <h2><span className="icon">📋</span>Gestão de Riscos</h2>
        <div className="nav-item">
          <div className="nav-item-icon">➕</div>
          <div className="nav-item-content">
            <h3>Cadastrar Novo Risco</h3>
            <p>Adicione novos riscos identificados, preenchendo informações como localização, tipo, gravidade e medidas preventivas.</p>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-item-icon">✏️</div>
          <div className="nav-item-content">
            <h3>Editar Riscos Existentes</h3>
            <p>Atualize informações de riscos já cadastrados, modifique status, adicione observações ou anexe documentos.</p>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-item-icon">✅</div>
          <div className="nav-item-content">
            <h3>Controle de Status</h3>
            <p>Gerencie o ciclo de vida dos riscos: Identificado → Em Análise → Em Tratamento → Controlado → Resolvido.</p>
          </div>
        </div>
      </div>

      <div className="nav-section">
        <h2><span className="icon">📊</span>Relatórios e Análises</h2>
        <div className="nav-item">
          <div className="nav-item-icon">📈</div>
          <div className="nav-item-content">
            <h3>Relatórios Gerenciais</h3>
            <p>Gere relatórios personalizados por período, setor ou tipo de risco. Exporte dados em PDF, Excel ou CSV.</p>
          </div>
        </div>
      </div>

      <div className="steps-grid">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Acesso Inicial</h3>
          <p>Faça login no sistema com suas credenciais fornecidas pela administração hospitalar.</p>
        </div>
        <div className="step-card">
          <div className="step-number">2</div>
          <h3>Explore o Dashboard</h3>
          <p>Familiarize-se com as informações gerais e indicadores principais na página inicial.</p>
        </div>
        <div className="step-card">
          <div className="step-number">3</div>
          <h3>Navegue pelo Mapa</h3>
          <p>Use o mapa interativo para visualizar riscos por setor e localização específica.</p>
        </div>
        <div className="step-card">
          <div className="step-number">4</div>
          <h3>Gerencie Riscos</h3>
          <p>Cadastre novos riscos, atualize existentes e acompanhe o progresso das ações preventivas.</p>
        </div>
      </div>

      <div className="quick-tips">
        <h3><span className="icon">💡</span>Dicas Importantes</h3>
        <ul className="tip-list">
          <li>Sempre salve as alterações antes de navegar para outra página</li>
          <li>Use os filtros para encontrar informações específicas mais rapidamente</li>
          <li>Mantenha os dados atualizados para garantir a eficácia do sistema</li>
          <li>Consulte regularmente os relatórios para acompanhar tendências</li>
          <li>Configure notificações para receber alertas sobre riscos críticos</li>
          <li>Faça backup regular dos dados mediante a função de exportação</li>
        </ul>
      </div>

      <div className="alert">
        <strong>Importante:</strong> Este sistema é uma ferramenta de apoio à gestão de riscos. Sempre siga os protocolos de segurança estabelecidos pela instituição e consulte os responsáveis técnicos em caso de dúvidas sobre procedimentos específicos.
      </div>
    </div>
  )
}

export default App
