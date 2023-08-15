// Para RevisionStatus
export enum RevisionStatus {
    PENDING = 'PENDIENTE',
    APPROBED = 'APROBADO',
    OBSERVED = 'OBSERVADO',
    NOT_ASSIGNED = 'NO ASIGNADO'
  }
  
  // Para Roles
  export enum Roles {
    GENERAL_MANAGER = 'Gerente general',
    FINANCIAL_MANAGER = 'Jefe de finanzas',
    FINANCIAL_TECHNICIAN = 'Técnico de finanzas',
    SALES_MANAGER_CB = 'Administrador de operaciones de ventas Cochabamba',
    SALES_MANAGER_LP = 'Administrador de operaciones de ventas La Paz',
    SALES_MANAGER_SC = 'Administrador de operaciones de ventas Santa Cruz',
    SALES_MANAGER_OR = 'Administrador de operaciones de ventas Oruro',
    SALES_MANAGER_TR = 'Administrador de operaciones de ventas Trópico',
    SUPERVISOR = 'Supervisor'
  }
  
  // Para Status
  export enum Status {
    EMITTED = 'EMITIDO',
    RECEIVED = 'ENTREGADO',
    CANCELED = 'CANCELADO'
  }