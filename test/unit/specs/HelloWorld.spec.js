// 从测试实用工具集中导入 `mount()` 方法
import { shallow } from 'vue-test-utils';
// 导入你要测试的组件如App.vue
import App from '@/App';

describe('App.test.js', () => {
  let wrapper,vm;

  beforeEach(() => {
    wrapper = shallow(App);
    vm = wrapper.vm;
  });

  it('closePacket Fn should be called', () => {
    expect(vm.packetShow).toEqual(['false'])
  });

  // 为App的单元测试增加快照（snapshot）：
  it('has the expected content', () => {
    expect(vm.$el).toMatchSnapshot()
  })
});

