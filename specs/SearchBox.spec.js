import { shallowMount } from '@vue/test-utils'
import SearchBox from '../src/SearchBox.vue'

const factory = (values = {}) => {
    return shallowMount(SearchBox, {
        data: function(){
            return { ...values }
        }
    })
}

describe('SearchBox.vue', () => {
    it('render correct default classes', () => {
        const wrapper = factory();
        expect(wrapper.find('.search-box').exists()).toBeTruthy();
        expect(wrapper.find('.input-group').exists()).toBeTruthy();
        expect(wrapper.find('.txt-search').exists()).toBeTruthy();
        expect(wrapper.find('.input-group-addon').exists()).toBeTruthy();
        expect(wrapper.find('.input-group-text').exists()).toBeTruthy();
        expect(wrapper.contains('font-awesome-icon-stub')).toBe(true);
    });

    it('render correct default data and props', () => {
        const wrapper = factory();
        expect(wrapper.vm.txtInput).toBe('');
        expect(wrapper.vm.$props.path).toBe(undefined);
    });

    it('assign props', () => {
        const wrapper = factory();
        wrapper.setProps({ path: '/sample/path' })
        expect(wrapper.vm.$props.path).toBe('/sample/path');
    });

    it('assign data', () => {
        const wrapper = factory();
        wrapper.setData({ txtInput: 'name' })
        expect(wrapper.vm.txtInput).toBe('name');
    });
})