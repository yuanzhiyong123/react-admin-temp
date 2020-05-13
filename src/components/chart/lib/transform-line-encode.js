import _ from 'lodash';
import tooltipFormatter from './formatter.js';
import numberValueFormatter from './number-value-formatter.js';

const defaultOptions = {
    tooltip: {
        // show: false,
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            snap: true
        },
        // 是否将 tooltip 框限制在图表的区域内。
        confine: true,
        default: 'rgba(50,50,50,0.5)'
        // alwaysShowContent: true
    },
    xAxis: {
        // 坐标轴两边是否留白
        // show: false,
        boundaryGap: true,
        axisLabel: {
            rotate: 30,
            color: '#7C87A0'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1 //这里是坐标轴的宽度
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed' //设置网格线类型 dotted：虚线   solid:实线
            },
            show: true
        }
    },
    yAxis: {
        // show: false,
        // type: 'category',
        splitLine: {
            lineStyle: {
                type: 'dashed' //设置网格线类型 dotted：虚线   solid:实线
            }
        },

        splitNumber: 4,
        axisLabel: {
            formatter: numberValueFormatter,

            color: '#7C87A0'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1 //这里是坐标轴的宽度
            }
        }
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '15%',
        top: '3%'
        // height: '200px'
    }
};

const transformLineEncode = (
    encodeSeriesItem,
    source,
    nameMapper,
    encodeSeriesType
) => {
    const {
        name = 'name',
        x,
        y,
        stack,
        symbol = '',
        smooth,
        showMarkLine = false,
        itemStyle = {},
        seriesIndex = 0,
        label: encodeSeriesLabel
    } = encodeSeriesItem;
    const {
        tooltip,
        xAxis: encodeXAxis = {},
        yAxis: encodeYAxis = {},
        legend,
        grid
    } = encodeSeriesItem.__parent;
    const xAxis = {
        data: []
    };
    // xAxis.axisLabel.formatter 支持
    if (encodeXAxis.axisLabel) {
        xAxis.axisLabel = _.merge({}, encodeXAxis.axisLabel);
    }
    if (encodeXAxis.show !== undefined) {
        xAxis.show = encodeXAxis.show;
    }

    const yAxis = {};
    if (encodeYAxis.axisLabel) {
        yAxis.axisLabel = _.merge({}, encodeYAxis.axisLabel);
    }
    if (encodeYAxis.show !== undefined) {
        yAxis.show = encodeYAxis.show;
    }
    const seriesList = [];
    let nextTooltip = {};
    if (tooltip.show === false) {
        nextTooltip.show = false;
    } else {
        nextTooltip = {
            formatter: (...args) => {
                if (encodeSeriesType === 'all') {
                    return tooltipFormatter(
                        ...args,
                        source,
                        tooltip,
                        nameMapper
                    );
                } else {
                    const sourceItem = source[seriesIndex];
                    return tooltipFormatter(
                        ...args,
                        [sourceItem],
                        tooltip,
                        nameMapper
                    );
                }
            }
        };
    }
    const handleSourceItem = (sourceItem, sourceIndex) => {
        const { dataset = [] } = sourceItem;
        if (!Array.isArray(dataset)) {
            return {};
        }
        const seriesItem = {
            name: sourceItem[name],
            data: [],
            type: 'line',
            markLine: showMarkLine
                ? {
                      symbol: 'none', //去掉警戒线最后面的箭头
                      label: {
                          //   show: false,
                          position: 'end' //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
                      },
                      data: [
                          {
                              // silent: false, //鼠标悬停事件  true没有，false有
                              lineStyle: {
                                  //警戒线的样式  ，虚实  颜色
                                  type: 'dashed',
                                  color: '#FA3934',
                                  formatter: numberValueFormatter
                              },
                              formatter: numberValueFormatter,

                              type: 'average',
                              name: '平均值' // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
                          }
                      ]
                  }
                : {}
        };
        if (encodeSeriesLabel) {
            seriesItem.label = encodeSeriesLabel;
        }
        // 是否堆叠
        if (stack === true) {
            seriesItem.stack = true;
            seriesItem.areaStyle = { normal: {} };
        }
        // if (symbol) {
        seriesItem.symbol = symbol;
        // }
        if (smooth) {
            seriesItem.smooth = true;
        }
        // 警戒线
        // if (markLine) {
        //     seriesItem.markLine = markLine;
        // }
        if (itemStyle) {
            seriesItem.itemStyle = itemStyle;
        }
        // seriesItem.symbol = 'none';
        // seriesItem.smooth = true;
        dataset.forEach(dataItem => {
            const xValue = dataItem[x] || '';
            const yValue = dataItem[y] || '';
            if (sourceIndex === 0) {
                xAxis.data.push(xValue);
            }
            seriesItem.data.push(yValue);
        });
        seriesList.push(seriesItem);
    };

    // 通用映射显示所有数据集
    if (encodeSeriesType === 'all') {
        source.forEach((sourceItem, sourceIndex) => {
            handleSourceItem(sourceItem, sourceIndex);
        });
    } else {
        const sourceItem = source[seriesIndex] || {};
        const sourceIndex = 0;
        handleSourceItem(sourceItem, sourceIndex);
    }

    const resultOptions = _.merge({}, defaultOptions, {
        xAxis,
        yAxis,
        tooltip: nextTooltip,
        series: seriesList,
        legend: legend,
        grid: grid
    });
    if (!resultOptions.legend) {
        if (seriesList.length > 1) {
            resultOptions.legend = {
                type: 'scroll'
            };
            resultOptions.grid.top = '10%';
        } else {
            resultOptions.grid.top = '6%';
        }
    }
    return resultOptions;
};

export default transformLineEncode;
