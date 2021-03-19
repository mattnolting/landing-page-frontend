import React from 'react';
// import Automation from './components/Automation.svg';
import Subscriptions from './components/Subscriptions.svg';
import Cost from './components/Cost.svg';
// import Insights from './components/Insights.svg';
import Migrations from './components/Migrations.svg';
// import Openshift from './components/Openshift.svg';
import SAP from './components/SAP.svg';

// import insightsMarketing from './components/marketing/insightsMarketing.svg';
// import openShiftMarketing from './components/marketing/openShiftMarketing.svg';
// import ansibleMarketing from './components/marketing/ansibleMarketing.svg';

import logoOpenShiftAppServices from './components/marketing/logo__osas.svg';
import logoOpenShift from './components/marketing/logo__openshift.svg';
import logoRHEL from './components/marketing/logo__rhel.svg';
import logoAnsibleAutomation from './components/marketing/logo__ansible-automation.svg';

// isDevPreview for developer previews
// isPreview for technical previews
// isEarlyAccess for limited access early beta

// isUnderMaintenance to disable all apps in a bundle
// example: isUnderMaintenance: true

// isUnderMaintenanceApps list of apps to disable in a bundle
/* example:
    isUnderMaintenanceApps: [
        'vulnerability',
        'compliance'
    ]
*/

export const activeTechnologies = [
  {
    id: 'OpenshiftAppServices',
    // url: 'openshift',
    // baseApp: '/',
    // apps: {
    //   'cluster manager': '/',
    // },
    // entitlement: 'openshift',
    marketing: true,
    marketingImage: logoOpenShiftAppServices,
    marketingText: (
      <div className="test">
        A group of managed cloud services for Red Hat OpenShift Dedicated,
        including OpenShift Streams for Apache Kafka,&nbsp;
        <a
          href="https://developers.redhat.com/products/rhoam/overview"
          target="_blank"
          rel="noreferrer"
        >
          OpenShift API Management,
        </a>
        &nbsp;and OpenShift Data Science.
      </div>
    ),
    marketingUrls: null,
    // image: Openshift,
    // emptyTitle: 'Get Started with Openshift.',
    // emptyID: 'openshift',
    // emptyText:
    //   "Test drive industry's leading container application platform in your browser, \
    //     and see how easy it is to use Kubernetes in your organization today.",
    // emptyAction: {
    //   primary: {
    //     title: 'Try it free',
    //   },
    // },
    // title: 'OpenShift Cluster Manager',
    // body: 'Install, register, and manage OpenShift® 4 clusters.',
  },
  {
    marketing: true,
    // id: 'Openshift',
    // url: 'openshift',
    // baseApp: '/',
    // apps: {
    //   'cluster manager': '/',
    // },
    // entitlement: 'openshift',
    marketingImage: logoOpenShift,
    marketingText:
      "An enterprise Kubernetes container platform with full-stack automated operations to manage hybrid cloud and multicloud deployments.  ",
    marketingUrls: {
      tryIt: 'https://try.openshift.com',
    },
    // image: Openshift,
    // emptyTitle: 'Get Started with Openshift.',
    // emptyID: 'openshift',
    // emptyText:
    //   "Test drive industry's leading container application platform in your browser, \
    //     and see how easy it is to use Kubernetes in your organization today.",
    // emptyAction: {
    //   primary: {
    //     title: 'Try it free',
    //   },
    // },
    // title: 'OpenShift Cluster Manager',
    // body: 'Install, register, and manage OpenShift® 4 clusters.',
  },
  {
    marketing: true,
    id: 'RHEL',
    // url: 'rhel',
    // baseApp: '/',
    // apps: {
    //   'cluster manager': '/',
    // },
    // entitlement: 'openshift',
    marketingImage: logoRHEL,
    marketingText: (
      <span>
        The leading enterprise Linux&reg; operating system, certified on
        hundreds of clouds and with thousands of hardware vendors.
      </span>
    ),
    marketingUrls: {
      tryIt: 'https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux/try-it',
    },
    // image: Openshift,
    // emptyTitle: 'Get Started with Openshift.',
    // emptyID: 'openshift',
    // emptyText:
    //   "Test drive industry's leading container application platform in your browser, \
    //     and see how easy it is to use Kubernetes in your organization today.",
    // emptyAction: {
    //   primary: {
    //     title: 'Try it free',
    //   },
    // },
    // title: 'OpenShift Cluster Manager',
    // body: 'Install, register, and manage OpenShift® 4 clusters.',
  },
  {
    marketing: true,
    id: 'AnsibleAutomation',
    // entitlement: 'ansible',
    // url: 'ansible',
    // baseApp: '/automation-analytics',
    // image: Automation,
    // title: 'Ansible Automation Platform',
    // body:
    //   'Extend your automation with analytics, content management, and policy and governance.',
    // apps: {
    //   'automation analytics': '/automation-analytics',
    //   'automation hub': '/automation-hub',
    //   'automation services catalog': '/catalog',
    // },
    marketingImage: logoAnsibleAutomation,
    marketingText:
      'Extend your automation with analytics, policy and governance, and content management.',
    marketingUrls: {
      tryIt: 'https://www.redhat.com/en/technologies/management/ansible/try-it',
    },
    // emptyTitle:
    //   'Ansible Automation Platform services requires a valid subscription',
    // emptyText:
    //   'Get analytics and knowledge on your automation, access to certified content, and more with a \
    //     Ansible Automation Platform subscription.',
    // emptyID: 'ansible',
    // emptyAction: {
    //   // primary: {
    //   //     title: 'Request an evaluation',
    //   //     navigate: 'https://www.redhat.com/en/technologies/management/ansible/try-it'
    //   // },
    //   primary: {
    //     title: 'Learn more',
    //     navigate: 'https://www.ansible.com/products/automation-platform',
    //   },
    //   close: {
    //     title: 'Not now',
    //   },
    // },
  },
  {
    id: 'subscriptions',
    entitlement: 'subscriptions',
    url: 'subscriptions',
    image: Subscriptions,
    title: 'Subscription Watch',
    body: 'Account-level summaries of your Red Hat subscription utilization',
    baseApp: '/rhel-sw',
    apps: {
      'Red Hat Enterprise Linux': '/rhel-sw',
      OpenShift: '/openshift-sw',
    },
    marketing: false,
    emptyTitle: 'Subscription Watch',
    emptyID: 'subscription-watch',
    emptyText: [
      'Subscription Watch enables you to understand your total subscription usage and capacity across your hybrid infrastructure over time.',
      <br key="sw1" />,
      <br key="sw2" />,
      'If you are interested in trying Subscription Watch, your Red Hat account team can help.',
    ],
    emptyAction: {
      primary: {
        title: 'Contact us',
        navigate: 'https://access.redhat.com/account-team',
      },
      close: {
        title: 'Not now',
      },
    },
  },
  {
    id: 'sap',
    url: 'insights',
    baseApp: '/sap',
    entitlement: 'insights',
    marketing: false,
    image: SAP,
    apps: {
      dashboard: '/sap',
    },
    title: 'Insights for SAP',
    body:
      'Leverage Insights to manage, optimize and remediate risks to your SAP landscape.',
  },
  {
    id: 'Cost Management',
    url: 'cost-management',
    baseApp: '/',
    entitlement: 'cost_management',
    marketing: false,
    image: Cost,
    apps: {
      'cost management': '/',
    },
    emptyTitle: 'Cost Management for OpenShift',
    emptyID: 'cost-management',
    emptyText:
      'Cost Management provides visibility and analysis for your OpenShift \
        and cloud costs. To obtain access to Cost Management, become an OpenShift customer.',
    emptyAction: {
      primary: {
        title: 'Learn more',
        navigate:
          'https://www.redhat.com/en/technologies/cloud-computing/openshift',
      },
      close: {
        title: 'Not now',
      },
    },
    title: 'Cost Management',
    body:
      'Analyze, forecast and optimize your OpenShift cluster costs in hybrid cloud environments.',
  },
  {
    id: 'migrations',
    entitlement: 'migrations',
    url: 'migrations',
    image: Migrations,
    title: 'Migration Services',
    body:
      'Get recommendations on migrating your applications and infrastructure to Red Hat.',
    baseApp: '/migration-analytics',
    apps: {
      'migration analytics': '/migration-analytics',
    },
    marketing: false,
    emptyTitle: 'Migration Analytics requires a CloudForms subscription.',
    emptyID: 'migration-analytics',
    emptyText:
      'Migration Analytics lets you examine workloads in your environment and evaluate \
        the effort needed to migrate or modernize each. Learn more to request a free CloudForms evaluation subscription',
    emptyAction: {
      primary: {
        title: 'Request an evaluation',
        navigate:
          'https://access.redhat.com/products/red-hat-cloudforms-migrations/evaluation',
      },
      secondary: {
        title: 'Take a tour',
      },
      close: {
        title: 'Not now',
      },
    },
  },
  {
    id: 'settings',
    entitlement: 'settings',
    url: 'settings',
    disabled: true,
    emptyAlertTitle: 'You need an account number to access this page',
  },
  {
    id: 'user-preferences',
    entitlement: 'user_preferences',
    url: 'user-preferences',
    disabled: true,
    emptyAlertTitle: 'You need an account number to access this page',
  },
  {
    id: 'internal',
    entitlement: 'internal',
    url: 'internal',
    disabled: true,
    emptyAlertTitle: 'You do not have access to this page',
  },
];
