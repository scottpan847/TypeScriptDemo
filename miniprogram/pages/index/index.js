"use strict";
Page({
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
            }
        });
    },
    onLoad: function () {
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFHO1lBQ1IsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLEVBQUUsQ0FBQztZQUNULFlBQVksRUFBRSxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsQ0FBQztZQUNiLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixlQUFlLEVBQUUsS0FBSztZQUN0QixhQUFhLEVBQUUsS0FBSztTQUNyQjtRQUNELFFBQVEsRUFBQztZQUNQLFFBQVEsRUFBQyxFQUFFO1lBQ1gsU0FBUyxFQUFDLEdBQUc7U0FDZDtRQUNELEtBQUssRUFBQyxFQUFFO1FBQ1IsSUFBSSxFQUFFLElBQUk7UUFDVixhQUFhLEVBQUMsSUFBSTtRQUNsQixPQUFPLEVBQUM7WUFDTjtnQkFDRSxRQUFRLEVBQUMseUJBQXlCO2dCQUNsQyxFQUFFLEVBQUMsQ0FBQztnQkFDSixRQUFRLEVBQUMsU0FBUztnQkFDbEIsU0FBUyxFQUFDLFVBQVU7Z0JBQ3BCLEtBQUssRUFBQyxFQUFFO2dCQUNSLE1BQU0sRUFBRSxFQUFFO2FBQ1g7U0FDRjtLQUNGO0lBQ0QsZUFBZTtRQUFmLGlCQWNDO1FBYkMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLElBQUksRUFBQyxPQUFPO1lBQ1osT0FBTyxFQUFDLFVBQUEsR0FBRztnQkFDVCxLQUFJLENBQUMsT0FBTyxDQUNWO29CQUNFLFFBQVEsRUFBQzt3QkFDUCxRQUFRLEVBQUMsR0FBRyxDQUFDLFFBQVE7d0JBQ3JCLFNBQVMsRUFBQyxHQUFHLENBQUMsU0FBUztxQkFDeEI7aUJBQ0YsQ0FDRixDQUFBO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxNQUFNO0lBRU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyB7e3BhZ2V9fS50c1xuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHNldHRpbmcgOiB7XG4gICAgICBza2V3OiAwLFxuICAgICAgcm90YXRlOiAwLFxuICAgICAgc2hvd0xvY2F0aW9uOiB0cnVlLFxuICAgICAgc2hvd1NjYWxlOiB0cnVlLFxuICAgICAgc3ViS2V5OiAnJyxcbiAgICAgIGxheWVyU3R5bGU6IDEsXG4gICAgICBlbmFibGVab29tOiB0cnVlLFxuICAgICAgZW5hYmxlU2Nyb2xsOiB0cnVlLFxuICAgICAgZW5hYmxlUm90YXRlOiBmYWxzZSxcbiAgICAgIHNob3dDb21wYXNzOiBmYWxzZSxcbiAgICAgIGVuYWJsZTNEOiBmYWxzZSxcbiAgICAgIGVuYWJsZU92ZXJsb29raW5nOiBmYWxzZSxcbiAgICAgIGVuYWJsZVNhdGVsbGl0ZTogZmFsc2UsXG4gICAgICBlbmFibGVUcmFmZmljOiBmYWxzZSxcbiAgICB9LFxuICAgIGxvY2F0aW9uOntcbiAgICAgIGxhdGl0dWRlOjMxLFxuICAgICAgbG9uZ2l0dWRlOjEyMFxuICAgIH0sXG4gICAgc2NhbGU6MTAsXG4gICAgaXMzRCA6dHJ1ZSxcbiAgICBpc092ZXJMb29raW5nOnRydWUsXG4gICAgbWFya2VyczpbXG4gICAgICB7XG4gICAgICAgIGljb25QYXRoOlwiLi4vLi4vcmVzb3VyY2VzL2Nhci5qcGdcIixcbiAgICAgICAgaWQ6MSxcbiAgICAgICAgbGF0aXR1ZGU6MjQuNjE5NjAwLFxuICAgICAgICBsb25naXR1ZGU6MTE4LjI0Nzg5MCxcbiAgICAgICAgd2lkdGg6NTAsXG4gICAgICAgIGhlaWdodDogNTBcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICBvbk15TG9jYXRpb25UYXAoKXtcbiAgICB3eC5nZXRMb2NhdGlvbih7XG4gICAgICB0eXBlOidnY2owMicsXG4gICAgICBzdWNjZXNzOnJlcz0+e1xuICAgICAgICB0aGlzLnNldERhdGEoXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9jYXRpb246e1xuICAgICAgICAgICAgICBsYXRpdHVkZTpyZXMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTpyZXMubG9uZ2l0dWRlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcblxuICB9XG59KSJdfQ==