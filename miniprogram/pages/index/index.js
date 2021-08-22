"use strict";
Page({
    isPageShowing: false,
    data: {
        setting: {
            skew: 0,
            rotate: 0,
            showLocation: true,
            showScale: true,
            subKey: '',
            layerStyle: 1,
            enableZoom: true,
            enableScroll: true,
            enableRotate: false,
            showCompass: false,
            enable3D: false,
            enableOverlooking: false,
            enableSatellite: false,
            enableTraffic: false,
        },
        location: {
            latitude: 31,
            longitude: 120
        },
        scale: 10,
        is3D: true,
        isOverLooking: true,
        markers: [
            {
                iconPath: "../../resources/car.jpg",
                id: 1,
                latitude: 24.619600,
                longitude: 118.247890,
                width: 50,
                height: 50
            },
        ]
    },
    onMyLocationTap: function () {
        var _this = this;
        wx.getLocation({
            type: 'gcj02',
            success: function (res) {
                _this.setData({
                    location: {
                        latitude: res.latitude,
                        longitude: res.longitude,
                    },
                });
            },
            fail: function () {
                wx.showToast({
                    iconL: 'none',
                    title: '请前往设置页授权'
                });
            }
        });
    },
    onShow: function () {
        this.isPageShowing = true;
    },
    onHide: function () {
        this.isPageShowing = false;
    },
    moveCars: function () {
        var _this = this;
        var map = wx.createMapContext("map");
        var dest = {
            latitude: 24.619600,
            longitude: 118.247890,
        };
        var moveCar = function () {
            dest.latitude += 0.1;
            dest.longitude += 0.1;
            map.translateMarker({
                destination: {
                    latitude: dest.latitude + 1,
                    longitude: dest.longitude + 1,
                },
                markerId: 1,
                autoRotate: false,
                rotate: 0,
                duration: 5000,
                animationEnd: function () {
                    if (_this.isPageShowing) {
                        moveCar();
                    }
                }
            });
        };
        moveCar();
    },
    onScanCliked: function () {
        wx.scanCode({
            success: function () {
                wx.navigateTo({
                    url: '/pages/register/register'
                });
            },
            fail: console.log
        });
    },
    onLoad: function () {
    },
    onReady: function () {
    },
    onShow1: function () {
    },
    onHide1: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBSSxDQUFDO0lBRUgsYUFBYSxFQUFDLEtBQUs7SUFJbkIsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFHO1lBQ1IsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLEVBQUUsQ0FBQztZQUNULFlBQVksRUFBRSxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsQ0FBQztZQUNiLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixlQUFlLEVBQUUsS0FBSztZQUN0QixhQUFhLEVBQUUsS0FBSztTQUNyQjtRQUNELFFBQVEsRUFBQztZQUNQLFFBQVEsRUFBQyxFQUFFO1lBQ1gsU0FBUyxFQUFDLEdBQUc7U0FDZDtRQUNELEtBQUssRUFBQyxFQUFFO1FBQ1IsSUFBSSxFQUFFLElBQUk7UUFDVixhQUFhLEVBQUMsSUFBSTtRQUNsQixPQUFPLEVBQUM7WUFDTjtnQkFDRSxRQUFRLEVBQUMseUJBQXlCO2dCQUNsQyxFQUFFLEVBQUMsQ0FBQztnQkFDSixRQUFRLEVBQUMsU0FBUztnQkFDbEIsU0FBUyxFQUFDLFVBQVU7Z0JBQ3BCLEtBQUssRUFBQyxFQUFFO2dCQUNSLE1BQU0sRUFBRSxFQUFFO2FBQ1g7U0FDRjtLQUNGO0lBQ0QsZUFBZTtRQUFmLGlCQW9CQztRQW5CQyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsSUFBSSxFQUFDLE9BQU87WUFDWixPQUFPLEVBQUMsVUFBQSxHQUFHO2dCQUNULEtBQUksQ0FBQyxPQUFPLENBQ1Y7b0JBQ0UsUUFBUSxFQUFDO3dCQUNQLFFBQVEsRUFBQyxHQUFHLENBQUMsUUFBUTt3QkFDckIsU0FBUyxFQUFDLEdBQUcsQ0FBQyxTQUFTO3FCQUN4QjtpQkFDRixDQUNGLENBQUE7WUFDSCxDQUFDO1lBQ0QsSUFBSSxFQUFDO2dCQUNILEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFDLE1BQU07b0JBQ1osS0FBSyxFQUFDLFVBQVU7aUJBQ2pCLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELFFBQVE7UUFBUixpQkEwQkM7UUF6QkMsSUFBTSxHQUFHLEdBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3ZDLElBQU0sSUFBSSxHQUFFO1lBQ1YsUUFBUSxFQUFDLFNBQVM7WUFDbEIsU0FBUyxFQUFDLFVBQVU7U0FDckIsQ0FBQTtRQUNELElBQU0sT0FBTyxHQUFHO1lBQ2QsSUFBSSxDQUFDLFFBQVEsSUFBRSxHQUFHLENBQUE7WUFDbEIsSUFBSSxDQUFDLFNBQVMsSUFBRSxHQUFHLENBQUE7WUFDbkIsR0FBRyxDQUFDLGVBQWUsQ0FBQztnQkFDbEIsV0FBVyxFQUFDO29CQUNWLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUM7b0JBQ3hCLFNBQVMsRUFBQyxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUM7aUJBQzNCO2dCQUNELFFBQVEsRUFBQyxDQUFDO2dCQUNWLFVBQVUsRUFBQyxLQUFLO2dCQUNoQixNQUFNLEVBQUMsQ0FBQztnQkFDUixRQUFRLEVBQUMsSUFBSTtnQkFDYixZQUFZLEVBQUM7b0JBQ1gsSUFBRyxLQUFJLENBQUMsYUFBYSxFQUFDO3dCQUNwQixPQUFPLEVBQUUsQ0FBQTtxQkFDVjtnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFBO1FBQ0QsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0lBQ0QsWUFBWTtRQUNWLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDVixPQUFPLEVBQUM7Z0JBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUMsMEJBQTBCO2lCQUMvQixDQUFDLENBQUE7WUFDSixDQUFDO1lBQ0QsSUFBSSxFQUFDLE9BQU8sQ0FBQyxHQUFHO1NBQ2pCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxNQUFNO0lBRU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyB7e3BhZ2V9fS50c1xuUGFnZSh7XG5cbiAgaXNQYWdlU2hvd2luZzpmYWxzZSxcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHNldHRpbmcgOiB7XG4gICAgICBza2V3OiAwLFxuICAgICAgcm90YXRlOiAwLFxuICAgICAgc2hvd0xvY2F0aW9uOiB0cnVlLFxuICAgICAgc2hvd1NjYWxlOiB0cnVlLFxuICAgICAgc3ViS2V5OiAnJyxcbiAgICAgIGxheWVyU3R5bGU6IDEsXG4gICAgICBlbmFibGVab29tOiB0cnVlLFxuICAgICAgZW5hYmxlU2Nyb2xsOiB0cnVlLFxuICAgICAgZW5hYmxlUm90YXRlOiBmYWxzZSxcbiAgICAgIHNob3dDb21wYXNzOiBmYWxzZSxcbiAgICAgIGVuYWJsZTNEOiBmYWxzZSxcbiAgICAgIGVuYWJsZU92ZXJsb29raW5nOiBmYWxzZSxcbiAgICAgIGVuYWJsZVNhdGVsbGl0ZTogZmFsc2UsXG4gICAgICBlbmFibGVUcmFmZmljOiBmYWxzZSxcbiAgICB9LFxuICAgIGxvY2F0aW9uOntcbiAgICAgIGxhdGl0dWRlOjMxLFxuICAgICAgbG9uZ2l0dWRlOjEyMFxuICAgIH0sXG4gICAgc2NhbGU6MTAsXG4gICAgaXMzRCA6dHJ1ZSxcbiAgICBpc092ZXJMb29raW5nOnRydWUsXG4gICAgbWFya2VyczpbXG4gICAgICB7XG4gICAgICAgIGljb25QYXRoOlwiLi4vLi4vcmVzb3VyY2VzL2Nhci5qcGdcIixcbiAgICAgICAgaWQ6MSxcbiAgICAgICAgbGF0aXR1ZGU6MjQuNjE5NjAwLFxuICAgICAgICBsb25naXR1ZGU6MTE4LjI0Nzg5MCxcbiAgICAgICAgd2lkdGg6NTAsXG4gICAgICAgIGhlaWdodDogNTBcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICBvbk15TG9jYXRpb25UYXAoKXtcbiAgICB3eC5nZXRMb2NhdGlvbih7XG4gICAgICB0eXBlOidnY2owMicsXG4gICAgICBzdWNjZXNzOnJlcz0+e1xuICAgICAgICB0aGlzLnNldERhdGEoXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9jYXRpb246e1xuICAgICAgICAgICAgICBsYXRpdHVkZTpyZXMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTpyZXMubG9uZ2l0dWRlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBmYWlsOigpPT57XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgaWNvbkw6J25vbmUnLFxuICAgICAgICAgIHRpdGxlOifor7fliY3lvoDorr7nva7pobXmjojmnYMnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgb25TaG93KCl7XG4gICAgdGhpcy5pc1BhZ2VTaG93aW5nID0gdHJ1ZTtcbiAgfSxcbiAgb25IaWRlKCl7XG4gICAgdGhpcy5pc1BhZ2VTaG93aW5nID0gZmFsc2U7XG4gIH0sXG4gIG1vdmVDYXJzKCl7XG4gICAgY29uc3QgbWFwID0gIHd4LmNyZWF0ZU1hcENvbnRleHQoXCJtYXBcIilcbiAgICBjb25zdCBkZXN0ID17XG4gICAgICBsYXRpdHVkZToyNC42MTk2MDAsXG4gICAgICBsb25naXR1ZGU6MTE4LjI0Nzg5MCxcbiAgICB9XG4gICAgY29uc3QgbW92ZUNhciA9ICgpPT57XG4gICAgICBkZXN0LmxhdGl0dWRlKz0wLjFcbiAgICAgIGRlc3QubG9uZ2l0dWRlKz0wLjFcbiAgICAgIG1hcC50cmFuc2xhdGVNYXJrZXIoe1xuICAgICAgICBkZXN0aW5hdGlvbjp7XG4gICAgICAgICAgbGF0aXR1ZGU6ZGVzdC5sYXRpdHVkZSsxLFxuICAgICAgICAgIGxvbmdpdHVkZTpkZXN0LmxvbmdpdHVkZSsxLFxuICAgICAgICB9LFxuICAgICAgICBtYXJrZXJJZDoxLFxuICAgICAgICBhdXRvUm90YXRlOmZhbHNlLFxuICAgICAgICByb3RhdGU6MCxcbiAgICAgICAgZHVyYXRpb246NTAwMCxcbiAgICAgICAgYW5pbWF0aW9uRW5kOigpPT57XG4gICAgICAgICAgaWYodGhpcy5pc1BhZ2VTaG93aW5nKXtcbiAgICAgICAgICAgIG1vdmVDYXIoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgbW92ZUNhcigpXG4gIH0sXG4gIG9uU2NhbkNsaWtlZCgpe1xuICAgIHd4LnNjYW5Db2RlKHtcbiAgICAgIHN1Y2Nlc3M6KCk9PntcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOicvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXInXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZmFpbDpjb25zb2xlLmxvZ1xuICAgIH0pXG4gIH0sXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3cxKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUxKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG5cbiAgfVxufSkiXX0=