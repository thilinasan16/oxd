import {mount} from '@vue/test-utils';
import CardTable from '@orangehrm/oxd/core/components/CardTable/CardTable.vue';

const DUMMY_DATA = {
  table: {
    leftPanel: {
      visible: true,
      header: {
        visible: true,
        button: {
          label: 'Add Candidate',
        },
      },
      body: {
        visible: true,
        button: {
          label: 'All Vacancy',
          iconName: 'eye',
          displayType: 'label',
          doubleLineLabel: true,
        },
        dropdown: {
          style: {
            width: '220px',
          },
        },
      },
      list: {
        visible: true,
        bubble: {
          visible: true,
        },
      },
    },
    topBar: {
      visible: true,
      listRecordCount: {
        singleTerm: 'Candidate',
        multiTerm: 'Candidates',
      },
      quickSearch: {
        visible: true,
        searchPlaceholder: 'Search',
        clearButton: true,
        buttonIcon: 'oxd-search',
        buttonDisplayType: 'label-info',
      },
    },
    headers: [
      {
        name: 'profilepic',
        slot: 'footer',
        title: '',
        style: {
          width: '50px',
        },
        cellType: 'oxd-table-cell-actions',
        cellRenderer: 'profilePicRenderer',
      },
      {
        name: 'candidate',
        sortField: 'candidate',
        initialSortOrder: 'ASC',
        title: 'Candidate',
        style: {
          flex: 1,
        },
      },
      {
        name: 'email',
        sortField: 'email',
        initialSortOrder: 'ASC',
        title: 'Email',
        style: {
          flex: 1,
        },
      },
      {
        name: 'contactNumber',
        sortField: 'contactNumber',
        initialSortOrder: 'ASC',
        title: 'Contact Number',
        style: {
          flex: 1,
        },
      },
      {
        name: 'dateOfApplication',
        sortField: 'dateOfApplication',
        initialSortOrder: 'DESC',
        title: 'Date Applied',
        style: {
          flex: 1,
        },
      },
      {
        name: 'action',
        slot: 'footer',
        title: 'Stage',
        style: {
          width: '300px',
        },
        cellType: 'oxd-table-cell-actions',
        cellRenderer: 'actionsRenderer',
      },
    ],
  },
  drawer: {
    visible: true,
    width: '600px',
    height: '100%',
    fullHeight: false,
    stickyFooter: true,
    fixedPosition: true,
    position: 'right',
    header: {
      visible: true,
      title: 'Filter',
      charmButton: {
        visible: true,
        icon: 'oxd-refresh',
      },
    },
    footer: {
      okButton: {
        label: 'Search',
      },
    },
  },
};

describe('List > List.vue', () => {
  it('renders OXD List > List', () => {
    const wrapper = mount(CardTable, {
      props: {
        configurations: DUMMY_DATA,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});