import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useI18n } from "@/hooks/use-i18n";

type DailyForecastResponse = {
  daily?: {
    time: string[];
    weather_code?: number[];
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
    precipitation_sum?: number[];
    wind_speed_10m_max?: number[];
  };
};

const formatDateShort = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
};

const weatherCodeToLabelAndEmoji = (code: number): { label: string; emoji: string } => {
  // Simplified mapping per WMO weather codes
  if ([0].includes(code)) return { label: "Clear", emoji: "☀️" };
  if ([1, 2].includes(code)) return { label: "Partly cloudy", emoji: "⛅" };
  if ([3].includes(code)) return { label: "Cloudy", emoji: "☁️" };
  if ([45, 48].includes(code)) return { label: "Fog", emoji: "🌫️" };
  if ([51, 53, 55, 56, 57].includes(code)) return { label: "Drizzle", emoji: "🌦️" };
  if ([61, 63, 65, 80, 81, 82].includes(code)) return { label: "Rain", emoji: "🌧️" };
  if ([66, 67].includes(code)) return { label: "Freezing rain", emoji: "🌧️❄️" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { label: "Snow", emoji: "❄️" };
  if ([95].includes(code)) return { label: "Thunderstorm", emoji: "⛈️" };
  if ([96, 99].includes(code)) return { label: "Severe storm", emoji: "🌩️" };
  return { label: "Unknown", emoji: "🌡️" };
};

export function WeatherSection() {
  const { t } = useI18n();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<DailyForecastResponse | null>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchForecast() {
      try {
        setLoading(true);
        setError(null);
        // Gangtok, Sikkim coordinates
        const latitude = 27.3389;
        const longitude = 88.6065;
        const params = new URLSearchParams({
          latitude: String(latitude),
          longitude: String(longitude),
          daily: [
            "weather_code",
            "temperature_2m_max",
            "temperature_2m_min",
            "precipitation_sum",
            "wind_speed_10m_max",
          ].join(","),
          timezone: "auto",
          forecast_days: "7",
        });

        const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = (await res.json()) as DailyForecastResponse;
        if (isMounted) setData(json);
      } catch (e: unknown) {
        if (!isMounted) return;
        if ((e as any)?.name === "AbortError") return;
        setError(e instanceof Error ? e.message : "Something went wrong");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchForecast();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const days = useMemo(() => {
    const d = data?.daily;
    if (!d?.time) return [];
    const length = d.time.length;
    const result = [] as Array<{
      date: string;
      label: string;
      emoji: string;
      tMax?: number;
      tMin?: number;
      precip?: number;
      wind?: number;
    }>;
    for (let i = 0; i < length; i++) {
      const code = d.weather_code?.[i] ?? -1;
      const { label, emoji } = weatherCodeToLabelAndEmoji(code);
      result.push({
        date: d.time[i],
        label,
        emoji,
        tMax: d.temperature_2m_max?.[i],
        tMin: d.temperature_2m_min?.[i],
        precip: d.precipitation_sum?.[i],
        wind: d.wind_speed_10m_max?.[i],
      });
    }
    return result;
  }, [data]);

  return (
    <section className="py-16 container mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">{t("weather_title")}</h2>
        <p className="text-muted-foreground mt-2">{t("weather_subtitle")}</p>
      </div>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="text-center text-destructive">{t("weather_error")}: {error}</div>
      )}

      {!loading && !error && days.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {days.map((d) => (
            <Card key={d.date}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{formatDateShort(d.date)}</span>
                  <span className="text-2xl" title={d.label} aria-label={d.label}>
                    {d.emoji}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t("weather_conditions")}</span>
                  <span>{d.label}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t("weather_temp")}</span>
                  <span>
                    {typeof d.tMax === "number" ? Math.round(d.tMax) : "-"}° / {typeof d.tMin === "number" ? Math.round(d.tMin) : "-"}°
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t("weather_precip")}</span>
                  <span>{typeof d.precip === "number" ? `${Math.round(d.precip)} mm` : "-"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t("weather_wind")}</span>
                  <span>{typeof d.wind === "number" ? `${Math.round(d.wind)} km/h` : "-"}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}

export default WeatherSection;


