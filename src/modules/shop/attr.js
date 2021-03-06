layui.define(['laytpl', 'admin', 'util'], function (exports) {
    var $ = layui.jquery,
        laytpl = layui.laytpl,
        admin = layui.admin,
        util = layui.util,
        layer = layui.layer;

    var picker_modal = '',
        data = {
            spec_attr: [],
            spec_list: []
        },
        options = {
            container: '.goods-spec-many'
        };


    var SHOP_ATTR = {

        /**
         * 初始化
         */
        initialize: function () {
            // 注册html容器
            this.$container = $(options.container);

            // this.$specAttr = this.$container.find('.spec-attr');
            // 显示添加规则组表单事件
            // this.showAddSpecGroupEvent();
            // 确认新增规则组事件
            // this.submitAddSpecGroupEvent();
            // 取消新增规则组事件
            // this.cancelAddSpecGroupEvent();
            // 注册添加规格元素事件
            // this.addSpecItemEvent();
            // 注册删除规则组事件
            // this.deleteSpecGroupEvent();
            // 注册删除规则元素事件
            // this.deleteSpecItemEvent();
            // 注册批量设置sku事件
            this.batchUpdateSku();
            // 注册表格input数据修改事件
            this.updateSpecInputEvent();
            // 渲染已存在的sku信息
            this.renderHtml();
        },

        /**
         * 显示添加规则组表单
         */
        showAddSpecGroupEvent: function () {
            // 显示添加规则组表单
            // this.$container.on('click', '.btn-addSpecGroup', function () {
            //     var $specGroupButton = $(this).parent(),
            //         $specGroupAdd = $specGroupButton.next();
            //     $specGroupButton.hide();
            //     $specGroupAdd.show();
            // });
        },

        /**
         * 确认新增规则组
         */
        submitAddSpecGroupEvent: function () {
            var _this = this;
            // 确认添加
            _this.$container.on('click', '.btn-addSpecName', function () {
                var $specGroupAdd = $(this).parent().parent(),
                    $specGroupButton = $specGroupAdd.prev(),
                    $specNameInput = _this.$container.find('.input-specName'),
                    $specValueInput = _this.$container.find('.input-specValue'),
                    specValueInputValue = $specValueInput.val(),
                    specNameInputValue = $specNameInput.val();
                if (specNameInputValue === '' || specValueInputValue === '') {
                    layer.msg('请填写规则名或规则值');
                    return false;
                }
                // 添加到数据库
                var load = layer.load();

                layui.util.request.post('/api/attr/create', {
                    label: specNameInputValue,
                    value: specValueInputValue
                }, function(res) {
                    var res = res.data

                    layer.close(load);
                    // 清空输入内容
                    $specNameInput.val('') && $specValueInput.val('');
                    data.spec_attr.push({
                        id: res.spec_id,
                        label: specNameInputValue,
                        children: [{
                            id: res.id,
                            label: res.value
                        }]
                    });
                    // 渲染规格属性html
                    _this.renderHtml();
                    // 隐藏添加规格组表单
                    $specGroupAdd.hide() && $specGroupButton.show();
                })
            });
        },

        /**
         * 取消新增规格组
         */
        cancelAddSpecGroupEvent: function () {
            this.$container.on('click', '.btn-cancleAddSpecName', function () {
                var $specGroupAdd = $(this).parent().parent(),
                    $specGroupButton = $specGroupAdd.prev();
                // 隐藏添加规格组表单
                $specGroupAdd.hide() && $specGroupButton.show()
            });
        },

        /**
         * 添加规则元素事件
         */
        addSpecItemEvent: function () {
            var _this = this;
            _this.$container.on('click', '.btn-addSpecItem', function () {
                var $this = $(this),
                    $iptSpecItem = $this.parents('.spec-item-add').find("input"),
                    specItemInputValue = $iptSpecItem.val(),
                    $specGroup = $this.parents(".spec-group-item");
                if (specItemInputValue === '') {
                    layer.msg('规格值不能为空');
                    return false;
                }


                // 添加到数据库
                var load = layer.load();
                layui.util.request.post('/api/attr/val/create', {
                    spec_id: $specGroup.data('group-id'),
                    value: specItemInputValue
                }, function(res) {
                    layer.close(load);

                    data.spec_attr[$specGroup.data('index')].children.push({
                        id: res.data.id,
                        label: specItemInputValue
                    });
                    // 渲染规格属性html
                    _this.renderHtml();
                })
            });
        },

        /**
         * 删除规则组事件
         */
        deleteSpecGroupEvent: function () {
            var _this = this;
            _this.$container.on('click', '.spec-group-delete', function () {
                // 规则组索引
                var index = $(this).parent().parent().attr('data-index');
                layer.confirm('确定要删除该规则组吗？确认后不可恢复请谨慎操作', function (layerIndex) {
                    // 删除指定规则组
                    data.spec_attr.splice(index, 1);
                    // 重新渲染规格属性html
                    _this.renderHtml();
                    layer.close(layerIndex);
                });
            });
        },

        /**
         * 删除规则组事件
         */
        deleteSpecItemEvent: function () {
            var _this = this;
            _this.$container.on('click', '.spec-item-delete', function () {
                var $item = $(this).parent(),
                    $specGroup = $item.parent().parent(),
                    groupIndex = $specGroup.attr('data-index'),
                    itemIndex = $item.attr('data-item-index');
                layer.confirm('确定要删除该规则吗？确认后不可恢复请谨慎操作', function (layerIndex) {
                    // 删除指定规则组
                    data.spec_attr[groupIndex].children.splice(itemIndex,
                        1);
                    // 重新渲染规格属性html
                    _this.renderHtml();
                    layer.close(layerIndex);
                });
            });
        },

        /**
         * 注册批量设置sku事件
         */
        batchUpdateSku: function () {
            var _this = this,
                $specBatch = _this.$container.find('.spec-batch');
            $specBatch.on('click', '.btn-specBatchBtn', function () {
                var formData = {};
                $specBatch.find('input').each(function () {
                    var $this = $(this),
                        formType = $this.data('type'),
                        value = $this.val();
                    if (typeof formType !== 'undefined' && formType !==
                        '' && value !== '') {
                        formData[formType] = value;
                    }
                });

                if (!$.isEmptyObject(formData)) {
                    data.spec_list.forEach(function (item, index) {
                        data.spec_list[index].form = $.extend({}, data.spec_list[index].form, formData);
                    });

                    // 渲染商品规格table
                    _this.renderTabelHtml();
                }
            });
        },

        /**
         * 渲染多规格模块html
         */
        renderHtml: function () {
            // 渲染商品规格元素
            // this.$specAttr.html(template('tpl_spec_attr', data));

            // 渲染商品规格table
            this.renderTabelHtml();
        },

        /**
         * 渲染表格html
         */
        renderTabelHtml: function () {
            var $specTabel = this.$container.find('.spec-sku-tabel'),
                good_ids = [],
                $goodsSku = $specTabel.parent();
            // 商品规格为空：隐藏sku容器
            if (data.spec_attr.length === 0) {
                $specTabel.empty();
                $goodsSku.hide();
                return false;
            }
            // 构建规格组合列表
            this.buildSpeclist();
            // 渲染table
            // data.spec_attr.forEach(function (item, index) {
            //     var _vals = []
            //     item.children.forEach(function(val, idx){
            //         _vals.push(val.id)
            //     })
            //     good_ids.push(item.id + ':' + _vals.join(','))
            // });

            $specTabel.html(template('tpl_spec_table', data));
            // 显示sku容器
            $goodsSku.show();
        },

        /**
         * 构建规格组合列表
         */
        buildSpeclist: function () {
            // 规格组合总数 (table行数)
            var totalRow = 1;
            for (var i = 0; i < data.spec_attr.length; i++) {
                totalRow *= data.spec_attr[i].children.length;
            }
            // 遍历tr 行
            var spec_list = [];
            for (i = 0; i < totalRow; i++) {
                var rowData = [],
                    rowCount = 1,
                    specSkuIdAttr = [];
                // 遍历td 列
                for (var j = 0; j < data.spec_attr.length; j++) {
                    var skuValues = data.spec_attr[j].children;
                    rowCount *= skuValues.length;
                    var anInterBankNum = (totalRow / rowCount),
                        point = ((i / anInterBankNum) % skuValues.length);
                    if (0 === (i % anInterBankNum)) {
                        rowData.push({
                            rowspan: anInterBankNum,
                            id: skuValues[point].id,
                            label: skuValues[point].label
                        });
                    }
                    specSkuIdAttr.push(skuValues[parseInt(point.toString())].id);
                }
                spec_list.push({
                    spec_val_ids: specSkuIdAttr.join(','),
                    rows: rowData,
                    form: {}
                });
            }
            // 合并旧sku数据
            if (data.spec_list.length > 0 && spec_list.length > 0) {
                for (i = 0; i < spec_list.length; i++) {
                    var overlap = data.spec_list.filter(function (val) {
                        return val.spec_val_ids === spec_list[i].spec_val_ids;
                    });
                    if (overlap.length > 0) spec_list[i].form = overlap[0].form;
                }
            }
            data.spec_list = spec_list;
        },

        /**
         * 输入规格信息自动同步更新spec_list
         */
        updateSpecInputEvent: function () {
            var _this = this;
            _this.$container.find('.spec-sku-tabel').on('propertychange change', 'input',
                function () {
                    var $this = $(this),
                        dataType = $this.attr('label'),
                        specIndex = $this.parent().parent().data('index');
                    data.spec_list[specIndex].form[dataType] = $this.val();
                });
        },

        /**
         * 获取当前data
         */
        getData: function () {
            return data;
        },

        /**
         * sku列表是否为空
         * @returns {boolean}
         */
        isEmptySkuList: function () {
            return !data.spec_list.length;
        },

        render: function (_option, baseData) {
            options = $.extend(true, {}, options, _option);
            // // 已存在的规格数据
            typeof baseData !== 'undefined' && baseData !== null && (data = baseData);

            // // 初始化
            this.initialize();

        }
    };

    exports('attr', SHOP_ATTR);
});
