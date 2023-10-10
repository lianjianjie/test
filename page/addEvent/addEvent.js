import { Form } from 'antd-mini/es/Form/form';


Page({
  form: new Form(),
  data: {

  },
  handleRef(ref) {
    this.form.addItem(ref);
  },
  reset() {
    this.form.reset();
  },
  async submit() {
    const values = await this.form.submit();
    my.alert({
      title: '提交',
      content: JSON.stringify(values, null, 2),
    });
    console.log(values);
  }
});
