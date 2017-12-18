import { Actions } from 'navigation-router'

const style = {
  icon: {
    overflow: 'visible',
    width: 24,
    height: 24
  }
}

export default {
  BelanjaApp: {
    title: 'BELANJA',
    showTab: true,
    icon: {
      type: 'Image',
      source: require('assets/icons/belanja_inactive.png'),
      activated: require('assets/icons/belanja.png'),
      customStyle: style.icon
    },
    handler() {
      Actions.BelanjaApp()
    }
  },
  KategoriApp: {
    title: 'KATEGORI',
    showTab: true,
    icon: {
      type: 'Image',
      source: require('assets/icons/kategori.png'),
      activated: require('assets/icons/kategori_aktif.png'),
      customStyle: style.icon
    },
    handler() {
      Actions.KategoriApp()
    }
  },
  MPayApp: {
    title: 'M-PAY',
    showTab: true,
    icon: {
      type: 'Image',
      source: require('assets/icons/m_pay_icon.png'),
      activated: require('assets/icons/m_pay_icon.png'),
      customStyle: style.icon
    },
    handler() {}
  },
  NgobrolApp: {
    title: 'NGOBROL',
    showTab: true,
    icon: {
      type: 'Image',
      source: require('assets/icons/ngobrol_icon.png'),
      activated: require('assets/icons/ngobrol_icon.png'),
      customStyle: style.icon
    },
    handler() {}
  }
}
