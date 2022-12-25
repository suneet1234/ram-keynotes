export const ActionType = {
    //======= For User Login ========
    USER_LOGIN_LOADING: 'USER_LOGIN_LOADING',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
    USER_LOGIN: 'USER_LOGIN',

    //======= For User Registration ========
    USER_REGISTER_LOADING: 'USER_REGISTER_LOADING',
    USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
    USER_REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
    USER_REGISTER: 'USER_REGISTER',

    //======= For Data Sending For MSW========
    DASHBOARD_DATA: 'DASHBOARD_DATA',
    DASHBOARD_PROCESSING_DATA: 'DASHBOARD_PROCESSING_DATA',
    DASHBOARD_DISTRIBUTE_DATA: 'DASHBOARD_DISTRIBUTE_DATA',
    DASHBOARD_WTE_COLLECTION_DATA: 'DASHBOARD_WTE_COLLECTION_DATA',
    DASHBOARD_WTE_DISTRIBUTION_DATA: 'DASHBOARD_WTE_DISTRIBUTION_DATA',
    DASHBOARD_WTE_PROCESSING_DATA: 'DASHBOARD_WTE_PROCESSING_DATA',

    //======= For Data Sending For BMW========
    DASHBOARD_BMW_DATA: 'DASHBOARD_BMW_DATA',
    DASHBOARD_BMW_PROCESSING_DATA: 'DASHBOARD_BMW_PROCESSING_DATA',
    DASHBOARD_BMW_DISTRIBUTE_DATA: 'DASHBOARD_BMW_DISTRIBUTE_DATA',

    //======= For Data Sending For IWM========
    DASHBOARD_IWM_COLLECTION: 'DASHBOARD_IWM_COLLECTION',
    DASHBOARD_IWM_ANALYSIS: 'DASHBOARD_IWM_ANALYSIS',
    DASHBOARD_IWM_LEFTOVERSTOCK: 'DASHBOARD_IWM_LEFTOVERSTOCK',

    //======= For Data Sending For Recycle Plastic======
    RECYCLE_PLASTIC_COLLECTION: 'RECYCLE_PLASTIC_COLLECTION',
    RECYCLE_PLASTIC_SEGREGATION: 'RECYCLE_PLASTIC_SEGREGATION',
    RECYCLE_PLASTIC_PROCESSED: 'RECYCLE_PLASTIC_PROCESSED',

    //======= For Data Sending For Recycle site operator CD======
    RECYCLE_CD_SITEOPERATOR_COLLECTED: 'RECYCLE_CD_SITEOPERATOR_COLLECTED',
    RECYCLE_CD_SITEOPERATOR_PRODUCT: 'RECYCLE_CD_SITEOPERATOR_PRODUCT',
    RECYCLE_CD_SITEOPERATOR_PROCESSED: 'RECYCLE_CD_SITEOPERATOR_PROCESSED',

     //======= For Data Sending For Recycle CRM======
    RECYCLE_CRM_COLLECTION: 'RECYCLE_CRM_COLLECTION',
    RECYCLE_CRM_SEGREGATION: 'RECYCLE_CRM_SEGREGATION',
    RECYCLE_CRM_PROCESSED: 'RECYCLE_CRM_PROCESSED',

    // -------------------For Department------------------
    RECYCLE_SBU_HEAD_DEPARTMENT: 'RECYCLE_SBU_HEAD_DEPARTMENT',
};